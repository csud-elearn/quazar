Template.adocEditor.helpers({

    "editorOptions": function() {
        return {
            lineNumbers: true,
            mode: "asciidoc",
            autofocus: true,
            keyMap: "sublime"
        }
    },

    "editorCode": function() {
        return "# Code asciidoc";
    },

    

});

Template.adocRender.helpers({
    "adocCode": function() {
        return Session.get('adocCode');
    },
});


Template.mdEditor.onCreated(function() {
});