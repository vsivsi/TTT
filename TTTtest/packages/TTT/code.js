/***************************************************************************
###     Copyright (C) 2014 by Vaughn Iverson
###     fileCollection is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

testColl = new Meteor.Collection("testColl");

if (Meteor.isServer) {
  testColl.allow({
    insert: function () { return true; }
  });
}

var _id = testColl.insert({ });
var doc = testColl.findOne({_id : _id});

console.log("Sync ID: ", _id, " doc: ", doc);

_id = testColl.insert({ }, function (err, retid) {
	doc = testColl.findOne({_id : retid});
	console.log("Sync ID: ", _id, "Async ID: ", retid, " doc: ", doc);
});
