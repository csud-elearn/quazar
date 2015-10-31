QuizRoutes = FlowRouter.group({
  prefix: '/quiz',
  name: 'quiz',
  triggersEnter: [function(context, redirect) {
    console.log('entering Quiz app');
    Session.set('activeApp', 'quiz');
  }]
});

QuizRoutes.route('/', {
  name: 'quizHome',
  action: function() {
    BlazeLayout.render('masterLayout', {appContent: 'quizHome'});
  },
})

