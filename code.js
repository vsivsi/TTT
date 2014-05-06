/***************************************************************************
###     Copyright (C) 2014 by Vaughn Iverson
###     fileCollection is free software released under the MIT/X11 license.
###     See included LICENSE file for details.
***************************************************************************/

testColl = new Meteor.Collection("testColl");

if (Meteor.isServer) {
  Meteor.publish('everything', function() { return testColl.find({}); });
  testColl.allow({
    insert: function () { return true; }
  });
}
