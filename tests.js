/***************************************************************************
###     Copyright (C) 2014 by Vaughn Iverson
###     fileCollection is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

Tinytest.add('Collection insert and findOne with _id', function(test) {
  var _id = testColl.insert({ });
  var doc = testColl.findOne({_id : _id});
  test.notEqual(doc, undefined, "findOne returned no result.");
});

Tinytest.addAsync('fileCollection insert and findOne with _id in callback', function(test, onComplete) {
  var _id = testColl.insert({ }, function (err, retid) {

    if (err) { test.fail(err); }
    test.equal(retid, _id, "findOne returned bad _id to callback");

    var doc = testColl.findOne({_id : retid});
    test.notEqual(doc, undefined, "findOne returned no result.");
    onComplete();

  });
});

Tinytest.addAsync('fileCollection insert and findOne with _id in callback, wait 500ms', function(test, onComplete) {
  var _id = testColl.insert({ }, function (err, retid) {

    if (err) { test.fail(err); }
    test.equal(retid, _id, "findOne returned bad _id to callback");

    Meteor.setTimeout(function () {
      var doc = testColl.findOne({_id : retid});
      test.notEqual(doc, undefined, "findOne returned no result.");
      onComplete();
    }, 250);
  });
});

Tinytest.addAsync('fileCollection insert and findOne with _id in callback, again', function(test, onComplete) {
  var _id = testColl.insert({ }, function (err, retid) {

    if (err) { test.fail(err); }
    test.equal(retid, _id, "findOne returned bad _id to callback");

    var doc = testColl.findOne({_id : retid});
    test.notEqual(doc, undefined, "findOne returned no result.");
    onComplete();
  });
});
