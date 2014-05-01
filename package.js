/***************************************************************************
###     Copyright (C) 2014 by Vaughn Iverson
###     fileCollection is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

Package.describe({
  name: 'TTT',
  summary: "This is a dummy package just to see if tinytest/Meteor.Collection has a problem"
});

Package.on_use(function(api) {
  api.add_files('code.js', ['client','server']);
  api.export('testColl');
});

Package.on_test(function (api) {
  api.use(['TTT', 'tinytest']);
  api.add_files('tests.js', ['server', 'client']);
});
