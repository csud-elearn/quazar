FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('homePage');
    },
    name: 'home'
});