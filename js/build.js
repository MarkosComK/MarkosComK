const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const config = require('./config');

// Configure marked once
marked.setOptions({
  gfm: true,
  breaks: true
});

// Load layout once
const layoutTemplate = fs.readFileSync(config.layoutPath, 'utf8');

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// ────────────────────────────────────────────────
//  Your other functions should be moved to separate files later
//  For now we keep them here so it still works
// ────────────────────────────────────────────────

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });

  list.forEach(item => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  return results;
}

function buildTree(files) {
  const tree = {};
  files.forEach(filePath => {
    const relative = path.relative(config.contentDir, filePath);
    const parts = relative.split(path.sep);
    const filename = parts.pop();
    const slug = filename.replace(/\.md$/, '');

    let current = tree;
    parts.forEach(folder => {
      if (!current[folder]) {
        current[folder] = { subfolders: {} };
      }
      current = current[folder].subfolders;
    });
    current[slug] = { title: slug, isFile: true };
  });
  return tree;
}

function buildSidebarHtml(node) {
  let html = '<ul>';
  Object.keys(node).sort().forEach(key => {
    const item = node[key];
    if (item.isFile) {
      html += `<li><a href="${key}.html">${item.title || key}</a></li>`;
    } else {
      html += `<li><strong>${key}</strong>`;
      html += buildSidebarHtml(item.subfolders || {});
      html += '</li>';
    }
  });
  html += '</ul>';
  return html;
}

// ────────────────────────────────────────────────
// Main build logic
// ────────────────────────────────────────────────

function build() {
  const mdFiles = getAllMarkdownFiles(config.contentDir);
  const tree = buildTree(mdFiles);
  const sidebarHtml = buildSidebarHtml(tree);

  mdFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: fm, content: mdBody } = matter(content);

    if (config.skipDrafts && fm.draft === true) return;

    const htmlBody = marked(mdBody);
    const title = fm.title || path.basename(filePath, '.md').replace(/-/g, ' ');
    const slug = path.basename(filePath, '.md');

    const pageHtml = layoutTemplate
      .replace(/{{TITLE}}/g, title)
      .replace(/{{SIDEBAR}}/g, sidebarHtml)
      .replace(/{{CONTENT}}/g, `<h1>${title}</h1>\n${htmlBody}`);

    const outPath = path.join(config.outputDir, `${slug}.html`);
    fs.writeFileSync(outPath, pageHtml);
    console.log(`Generated: ${slug}.html`);
  });

  // Index page
  const indexHtml = layoutTemplate
    .replace(/{{TITLE}}/g, 'My Notes')
    .replace(/{{SIDEBAR}}/g, sidebarHtml)
    .replace(/{{CONTENT}}/g, `
      <h1>My Notes</h1>
      <p>Choose a note from the left sidebar.</p>
    `);

  fs.writeFileSync(path.join(config.outputDir, 'index.html'), indexHtml);
  console.log('Generated: index.html');

  console.log(`Built ${mdFiles.length} files`);
}

build();
