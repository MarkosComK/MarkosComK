const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

// Tell marked to turn single line breaks into <br> (as we discussed)
marked.setOptions({
  gfm: true,
  breaks: true
});

const contentDir = path.join(__dirname, "content");     // ← folder with your .md files
const outputDir  = path.join(__dirname, "public");      // ← where HTML will be generated
const templatePath = path.join(__dirname, "layout.html"); // we'll create this next

// Very simple layout template (create this file next)
const layoutTemplate = fs.readFileSync(templatePath, "utf8");

// Make sure public folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Find all .md files
function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });

  list.forEach(item => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (item.name.endsWith(".md")) {
      results.push(fullPath);
    }
  });
  return results;
}

const mdFiles = getAllMarkdownFiles(contentDir);
const posts = [];

mdFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, "utf8");
  const { data: fm, content: mdBody } = matter(content);

  if (fm.draft === true) return; // skip drafts

  const htmlBody = marked(mdBody);

  const title = fm.title || path.basename(filePath, ".md").replace(/-/g, " ");
  const slug  = path.basename(filePath, ".md");

  // Simple individual post page
  const postHtml = layoutTemplate
    .replace("{{TITLE}}", title)
    .replace("{{CONTENT}}", `<h1>${title}</h1>\n${htmlBody}`);

  const outPath = path.join(outputDir, `${slug}.html`);
  fs.writeFileSync(outPath, postHtml);

  posts.push({ title, slug });
  console.log(`Generated: ${slug}.html`);
});

// Generate very basic index.html with list of posts
const postLinks = posts
  .map(p => `<li><a href="${p.slug}.html">${p.title}</a></li>`)
  .join("\n");

const indexHtml = layoutTemplate
  .replace("{{TITLE}}", "My Notes / Blog")
  .replace("{{CONTENT}}", `
    <h1>My Notes</h1>
    <p>Latest posts:</p>
    <ul>
      ${postLinks}
    </ul>
  `);

fs.writeFileSync(path.join(outputDir, "index.html"), indexHtml);
console.log("Generated: index.html");
console.log(`Done. ${posts.length} posts built.`);
