katexRoutes = FlowRouter.group({
  prefix: '/katex',
  name: 'katex',
  triggersEnter: [function(context, redirect) {
    console.log('entering KaTeX app');
    Session.set('activeApp', 'katex');
  }]
});

katexRoutes.route('/', {
  action: function() {
    BlazeLayout.render('masterLayout', {appContent: 'katexHome'});
  },
  name: 'katexHome',
  triggersEnter: [function(context, redirect) {
    console.log('running /katex enter trigger');
  }]
});