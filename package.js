Package.describe({
  name: 'krazyeom:material-design-lite',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Material Design Lite for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['icon.css', 'material.min.js', 'material.min.css'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
