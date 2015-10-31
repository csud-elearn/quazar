if ( Meteor.isClient ) {

    accountsUIBootstrap3.setLanguage('fr'); // for French

    Accounts.ui.config({
        requestPermissions: {},
        extraSignupFields: [{
            fieldName: 'firstName',
            fieldLabel: 'Prénom',
            inputType: 'text',
            visible: true,
            validate: function(value, errorFunction) {
              if (!value) {
                errorFunction("Le prénom est obligatoire");
                return false;
              } else {
                return true;
              }
            }
        }, {
            fieldName: 'laustName',
            fieldLabel: 'Nom de famille',
            inputType: 'text',
            visible: true,
        }, {
            fieldName: 'gender',
            showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
            fieldLabel: 'Sexe',
            inputType: 'radio',
            radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
            data: [{                    // Array of radio options, all properties are required
                id: 1,                  // id suffix of the radio element
                label: 'Homme',          // label for the radio element
                value: 'm'              // value of the radio element, this will be saved.
              }, {
                id: 2,
                label: 'Femme',
                value: 'f',
                checked: 'checked'
            }],
            visible: true
        }, {
            fieldName: 'terms',
            fieldLabel: "J'ai lu et compris les conditions d'utilisation",
            inputType: 'checkbox',
            visible: true,
            saveToProfile: false,
            validate: function(value, errorFunction) {
                if (value) {
                    return true;
                } else {
                    errorFunction('Vous devezu accepter les conditions d\'utilisation.');
                    return false;
                }
            }
        }]
    });
}
