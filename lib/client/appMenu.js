
addAppMenu = function (appName, menu) {
    Meteor.startup(function () {
        console.log('menu de ' + appName + ' ajouté');
        var appMenu = Session.get('appMenu') || {};
        appMenu[appName] = menu;
        // console.table(appMenu);
        Session.set('appMenu', appMenu);
    });
}

smallMenu = function() {
    let prevMenuWidth = Session.get('menuWidth');
    Session.set('prevMenuWidth', prevMenuWidth);
    Session.set('menuWidth', 1);
}

restoreMenu = function() {
    Session.set('menuWidth', Session.get('prevMenuWidth'));
}

largeMenu = function() {
    
}

