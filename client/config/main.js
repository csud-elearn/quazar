var config = {
    'showLeftDropdown' : false,
    'showRightDropdown' : true
};

Session.set('config', config);

Template.registerHelper('config', function() {
    return Session.get('config');
});

var apps = {
    katex: {

    },
    quiz: {

    }
};