const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const config = require('./config');
const { getAllMarkdownFiles } = require('./files');
const { buildTree, buildSidebarHtml } = require('./sidebar');

// Configure marked (global for the process)
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

function build() {
  // 1. Find all markdown files
  const mdFiles = getAllMarkdownFiles(config.contentDir);

  // 2. Build sidebar once (shared across all pages)
  const tree = buildTree(mdFiles, config.contentDir);
  const sidebarHtml = buildSidebarHtml(tree);

  // 3. Generate individual post pages
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

  // 4. Generate index page
  const indexHtml = layoutTemplate
    .replace(/{{TITLE}}/g, 'My Notes')
    .replace(/{{SIDEBAR}}/g, sidebarHtml)
    .replace(/{{CONTENT}}/g, `
      <h1>My Notes</h1>
      <p>Choose a note from the left sidebar.</p>
    `);

  fs.writeFileSync(path.join(config.outputDir, 'index.html'), indexHtml);
  console.log('Generated: index.html');

  console.log(`\nBuilt ${mdFiles.length} markdown files`);
}

// Run the build
build();
