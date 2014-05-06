/***************************************************************************
###     Copyright (C) 2014 by Vaughn Iverson
###     fileCollection is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

if (Meteor.isClient) {
  var sub = Meteor.subscribe('everything');
} else {
  var sub = null;
}

var asyncTest = function(test, onComplete) {
  var _id = testColl.insert({ }, function (err, retid) {
    if (err) { test.fail(err); }
    test.equal(retid, _id, "findOne returned bad _id to callback");
    var doc = testColl.findOne({_id : retid});
    test.notEqual(doc, undefined, "findOne returned no result.");
    onComplete();
  });
}

var subWrapper = function (func, sub) {
  return function(test, onComplete) {
    if (Meteor.isClient) {
      Deps.autorun(function () {
        if (sub.ready()) {
          func(test, onComplete);
        }
      });
    } else {
      func(test, onComplete);
    }
  };
};

Tinytest.addAsync('fileCollection insert and findOne with _id in callback', subWrapper(asyncTest, sub));
Tinytest.addAsync('fileCollection insert and findOne with _id in callback, again', subWrapper(asyncTest, sub));
