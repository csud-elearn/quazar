courseRoutes = FlowRouter.group({
  prefix: '/course',
  name: 'course',
  triggersEnter: [function(context, redirect) {
    console.log('entering course app');
    Session.set('activeApp', 'course');
  }]
});

courseRoutes.route('/', {
  action: function() {
    BlazeLayout.render('masterLayout', {appContent: 'courseHome'});
  },
  name: 'courseHome',
  triggersEnter: [function(context, redirect) {
    console.log('running /course enter trigger');
  }]
});

