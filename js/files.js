const fs = require('fs');
const path = require('path');

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });

  list.forEach(item => {
    const fullPath = fs.realpathSync(path.join(dir, item.name));
    if (item.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      results.push(fullPath);
    }
  });

  return results;
}

module.exports = { getAllMarkdownFiles };
