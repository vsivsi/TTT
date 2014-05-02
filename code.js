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

var old_id = testColl.insert({ });
var doc = testColl.findOne({_id : old_id});

console.log("Sync ID: ", old_id, " doc: ", doc);

var _id = testColl.insert({ }, function (err, retid) {
	doc = testColl.findOne({_id : retid});
	console.log("Sync ID: ", _id, "Async ID: ", retid, " doc: ", doc);

	doc = testColl.findOne({_id : old_id});
	console.log("Trying to find old_id...  Old ID: ", old_id, " doc: ", doc);

	console.log("How many documents are in testColl? ", testColl.find({}).count());
});
