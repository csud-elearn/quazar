courseRoutes.route('/testAdoc', {
  action: function() {
    BlazeLayout.render('masterLayout', {appContent: 'courseTestAsciidoc'});
  },
  name: 'courseTestAdoc',
  triggersEnter: [function(context, redirect) {
    console.log('running /courseTestAdoc enter trigger');
    smallMenu();
  }],
  triggersExit: [function() {
  	restoreMenu()
  }]
});

