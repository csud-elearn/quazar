QuizRoutes.route('/list', {
  name: 'quizList',
  action: function () {
    BlazeLayout.render('masterLayout', {appContent: 'quizList'});
  }
});