
Router.route('/quiz/list', {name: 'quizList', controller: 'QuizListController'});


QuizListController = RouteController.extend({
    template: 'quizList'
});
