if (Meteor.isClient) {
  // counter starts at 0
  
  Meteor.startup(function () {
    Session.set('activeApp', 'quiz');
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


