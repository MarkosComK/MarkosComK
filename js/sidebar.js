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

function buildSidebarHtml(node, basePath = '', level = 0) {
  let html = '<ul class="sidebar-tree">';

  const keys = Object.keys(node).sort();
  const numItems = keys.length;

  keys.forEach((key, index) => {
    const item = node[key];
    const isLastInThisLevel = (index === numItems - 1);
    const fullPath = basePath ? `${basePath}/${key}` : key;

    // Decide prefix for this item
    let prefix = '';
    if (level > 0) {
      prefix = isLastInThisLevel ? '└─' : '├─';
    }

    if (item.isFile) {
      html += `<li class="tree-item file-item" data-level="${level}">
        <span class="tree-prefix">${prefix}</span>
	<i class="fa-brands fa-markdown"></i>
        <a href="${key}.html">${item.title || key}</a>
      </li>`;
    } else {
      html += `<li class="tree-item folder-item" data-level="${level}">
        <div class="folder-toggle">
          <span class="tree-prefix">${prefix}</span>
          <i class="fa-solid fa-folder folder-icon"></i>
          <span>${key}</span>
        </div>
        <ul class="folder-children">
          ${buildSidebarHtml(item.subfolders || {}, fullPath, level + 1)}
        </ul>
      </li>`;
    }
  });

  html += '</ul>';
  return html;
}

module.exports = {
  buildTree,
  buildSidebarHtml
};
