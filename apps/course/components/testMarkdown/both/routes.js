courseRoutes.route('/testMd', {
  action: function() {
    BlazeLayout.render('masterLayout', {appContent: 'courseTestMd'});
  },
  name: 'courseTestMd',
  triggersEnter: [function(context, redirect) {
    console.log('running /courseTestMd enter trigger');
    smallMenu();
  }],
  triggersExit: [function() {
  	restoreMenu()
  }]
});

