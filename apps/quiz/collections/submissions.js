
/*

    Soumissions de questions
    ========================

    Collection qui regroupe toutes les soumissions à une certaine question.

*/

Schema = {};

QuestionSubmissions = new Mongo.Collection("question_submissions");

Schema.QuestionSubmission = new SimpleSchema({

    // référence à la table Meteor.users ==> id string d'un utilisateur qui
    // doit exister ... voir comment valider cela
    userId: {
        type: String,
        label: "Utilisateur",
        optional: false,
    },

    // référence à un document de la collection Questions ... ce document doit
    // s'y trouver ... il ne semble pas encore y avoir de manière de valider
    // cela automatiquement
    questionId: {
        type: String,
        label: "ID de la question",
        optional: false,
    },

    // je ne sais pas si 'datetime' est le nom le plus approprié
    datetime: {
        type: Date,
        label: "Date et heure de soumission",
        optional: false,
    },

    // important pour vérifier qu'il n'y ait pas de tricherie par exemple
    ip: {
        type: SimpleSchema.RegEx.IP,
        label: "Adresse IP de la soumission",
        optional: false,
    },

    // nombre de secondes passées sur la question
    elapsed: {
        type: Number,
        label : "Temps écoulé sur la question",
        optional: false,
    },

    // note de la soumission. 
    grade: {
        type: Number,
        decimal: true,
        label: "Note",
        // on ne sait pas à l'avance comment attribuer les points. Peut-être n
        // 'est-ce même pas possible. Ce champ est en principe rempli par le
        // serveur et non par le client ... mais il faut d'abord faire tourner
        // le grader ...
        optional: true,
    },
    submission: {
        type: Object,
        label: "Données soumises",
        optional: false,
        // c'est le grader qui va valider les données
        blackbox: true,
    },
});

QuestionSubmissions.attachSchema(Schema.QuestionSubmission);