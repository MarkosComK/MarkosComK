const path = require('path');

function buildTree(files, contentDir) {
  const tree = {};

  files.forEach(filePath => {
    const relative = path.relative(contentDir, filePath);
    const parts = relative.split(path.sep);
    const filename = parts.pop();               // remove the file itself
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
      // flat links — we use the slug directly (as discussed earlier)
      html += `<li><a href="${key}.html">${item.title || key}</a></li>`;
    } else {
      // folder
      html += `<li><strong>${key}</strong>`;
      if (item.subfolders && Object.keys(item.subfolders).length > 0) {
        html += buildSidebarHtml(item.subfolders);
      }
      html += '</li>';
    }
  });
  html += '</ul>';
  return html;
}

module.exports = {
  buildTree,
  buildSidebarHtml
};
