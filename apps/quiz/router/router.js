// ==== Routes concernant les quiz

Router.route('/quiz', {name: 'quiz', controller: 'QuizController'});


QuizController = RouteController.extend({
    template: 'quizMainLayout'
});
