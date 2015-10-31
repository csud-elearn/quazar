/*

    Ce fichier définit le schéma SimpleSchema associé à la collection
    Meteor.users

*/

Schema = Schema || {};

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        label: "Prénom",
        optional: false
    },
    lastName: {
        type: String,
        label: "Nom de famille",
        optional: false
    },
    birthday: {
        type: Date,
        label: "Date de naissance",
        optional: true
    },
    gender: {
        type: String,
        label: "Sexe",
        allowedValues: ['m', 'f'],
        optional: true
    },
    website: {
        type: String,
        label: "Site Internet",
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        label: "",
        // For accounts-password, either emails or username is required, but
        // not both. It is OK to make this optional here because the accounts-
        // password package does its own validation. Third-party login
        // packages may not require either. Adjust this schema as necessary
        // for your usage.
        optional: true
    },
    emails: {
        type: Array,
        label: "",
        // For accounts-password, either emails or username is required, but
        // not both. It is OK to make this optional here because the accounts-
        // password package does its own validation. Third-party login
        // packages may not require either. Adjust this schema as necessary
        // for your usage.
        optional: false
    },
    "emails.$": {
        type: Object,
        label: "",
    },
    "emails.$.address": {
        type: String,
        label: "Courriel",
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean,
        label: "Confirmation du courriel",
    },
    createdAt: {
        type: Date,
        label: "Date de création du compte",
    },
    profile: {
        type: Schema.UserProfile,
        label: "Profile",
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        label: "",
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify th,
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        label: "",
        optional: true,
        blackbox: true
    },
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true
    }
});

Meteor.users.attachSchema(Schema.User);