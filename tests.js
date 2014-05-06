/***************************************************************************
###     Copyright (C) 2014 by Vaughn Iverson
###     fileCollection is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

var asyncTest = function(test, onComplete) {
  var _id = testColl.insert({ }, function (err, retid) {

    if (err) { test.fail(err); }
    test.equal(retid, _id, "findOne returned bad _id to callback");

    var doc = testColl.findOne({_id : retid});
    test.notEqual(doc, undefined, "findOne returned no result.");
    onComplete();
  });
}

// FAILS
Tinytest.addAsync('fileCollection insert and findOne with _id in callback', asyncTest);

// PASSES
Tinytest.addAsync('fileCollection insert and findOne with _id in callback, again', asyncTest);


//// IF the code below is the only test, it will pass for timeout delays > ~50ms and fail for timeouts less than that.

// Tinytest.addAsync('fileCollection insert and findOne with _id in callback, wait 500ms', function(test, onComplete) {
//   var _id = testColl.insert({ }, function (err, retid) {
//     if (err) { test.fail(err); }
//     test.equal(retid, _id, "findOne returned bad _id to callback");
//     Meteor.setTimeout(function () {
//       var doc = testColl.findOne({_id : retid});
//       test.notEqual(doc, undefined, "findOne returned no result.");
//       onComplete();
//     }, 250);
//   });
// });
