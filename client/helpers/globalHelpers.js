Template.registerHelper('projectName', function () {
    return 'Quazar';
});


/*Template.registerHelper('activeApp', function () {
    console.log(this);
    var path = FlowRouter.current().path;
    console.log("Current path : " + path);
    var appName = path.split('/')[1];
    console.log("App Name : " + appName);
    return appName;
});*/

Template.registerHelper('activeApp', function () {
    return Session.get('activeApp');
});

Template.registerHelper('appMenu', function () {
    return Session.get('appMenu');
});

Template.registerHelper('activeMenu', function () {
    var appMenu = Session.get('appMenu');
    return appMenu[Session.get('activeApp')];
});




/*Template.registerHelper('activePath', function () {
    console.table(this);
    var path = Router.current().route.path();
    return path;
});*/


/*Template.registerHelper('isActiveApp', function (appName) {
    var path = Router.current().route.path(this));
    if ( path.)
});*/

/*Template.registerHelper('isActiveRoute', function (routeName) {
    if ( Router.current().route.getName() === routeName ) {
        return 'active';
    }
});*/

Template.registerHelper('menuItems', function () {
    return [
        {label: 'Liste de quiz', action: 'list', url: 'list'},
        {label: 'Autre Action', action: 'autre', url: 'autre'}
    ];
});

