Template.masterLayout.helpers({
    showMenu: function () {
        return Session.get('showMenu');
    },
    menuWidth: function () {
        return Session.get('menuWidth');
    },
    numCols: function () {
        var menuWidth = Session.get('menuWidth');
        return {menu: menuWidth, app: 12-menuWidth};
    },
});

function showMenu() {
    Session.set('menuWidth', 2);
}

Template.masterLayout.onCreated(function () {
    showMenu();
});