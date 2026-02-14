const path = require('path');

module.exports = {
  contentDir:   path.join(__dirname, '..', 'content'),
  outputDir:    path.join(__dirname, '..', 'public'),
  layoutPath:   path.join(__dirname, '..', 'layout.html'),
  skipDrafts:   true,
};
