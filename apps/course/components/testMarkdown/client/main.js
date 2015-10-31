Template.mdEditor.helpers({

    "editorOptions": function() {
        return {
            lineNumbers: true,
            mode: "markdown",
            autofocus: true,
            keyMap: "sublime",
            lineWrapping: true,
        }
    },

    "editorCode": function() {
        return "# Code markdown";
    },

    

});

Template.mdRender.helpers({
    "mdCode": function() {
        return Session.get('mdCode');
    },
});


Template.mdEditor.onCreated(function() {
});