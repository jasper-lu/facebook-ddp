Package.describe({
  name: 'oddup:facebook-ddp',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: "Facebook OAuth flow to include mobile ddp clients",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Oddup/facebook-ddp',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('Facebook');

  api.addFiles(
    ['facebook_configure.html', 'facebook_configure.js'],
    'client');

  api.addFiles('facebook_server.js', 'server');
  api.addFiles('facebook_client.js', 'client');
});
