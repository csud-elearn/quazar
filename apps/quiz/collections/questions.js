
/*

    Questions
    =========

    Est-ce une bonne idée de mettre les questions directement dans
    l'application des quiz ? Le souci est que d'autres composants de Quazar
    vont également avoir besoin de questions. On voudra par exemple les
    intégrer directement dans un cours sans passer par un quiz...

    Les questions peuvent avoir une existence indépendante des quiz. On
    pourrait imaginer les intégrer dans un cours entre les paragraphes pour
    vérifier les connaissances. On pourrait également imaginer les intégrer
    dans des examens (sorte de quiz notés). Il faut définir prioritairement la
    notion de quiz ici et laisser la gestion des questions à une autre
    "application".

    On pourrait peut-être imaginer un package par application pour améliorer
    la strcturation du code.

    Conclusion
    ==========

    Pour le moment, on peut mettre les questions ici et éventuellement
    les mettre ensuite dans une autre application. Le retour à la ligne n'est pas
    très pratique

    TODO
    ====


    à rajouter : il faudrait voir pour rajouter encore la possiblilé de poser
    des questions sur une question ou de faire des commentaires. Il faudrait
    séparer les commentaires pédagogiques et les commentaires des étudiants.


*/

Questions = new Mongo.Collection("questions");

Questions.attachSchema(new SimpleSchema({
    // donnée de la question
    statement: {
        type: String,
        label: "Donnée de la question",
        optional: false,
    },

    // indique le type de la question et va déterminer des tas d'autres
    // opérations (affichahge, création, grading ...)

    // il faut réfléchir si c'est mieux de stocker le type sous forme de
    // chaine de caractères ou sous forme de référence à une collection
    // contenant tous les types possibles
    type: {
        type: String,
        label: "Type de question",
        optional: false,
    },

    // statistiques globales concernant cette question
    stats: {
        type: String,
        label: "Statistiques générales",
        optional: true,
    },


    level: {
        type: Number,
        label: "Niveau de difficulté" ,
        optional: true,
        allowedValues: [1,2,3,4,5]
    },

    // liste de tags pour la question en particulier.
    tags: {
        type: [String],
        label: "Tags",
        optional: false,
        defaultValue: [],
    },

    // Je ne sais pas encore s'il s'agit d'une fonction JS stockée sous forme
    // de String ou si ceci sera autre chose tel qu'une référence vers une
    // entrée dans une autre collection
    grader: {
        // Je ne sais pas encore s'il s'agit d'une référence à un document
        // "grader" ou s'il s'agit du code JS d'une fonction qui va permettre
        // d'évaluer la soumission, mais en principe, il serait mieux que le
        // grader soit une fonction stockée ailleurs pour éviter les
        // dupplications
        type: String,
        label: "Moteur d'évaluation",
        optional: true,
        defaultValue: null
    },
    // Données spécifiques au type de question. Chaque type de question
    // s'accompagne du code nécessaire pour manipulater de manière appropriée
    // ces données qui dépendent du type de question
    specific: {
        type: Object,
        label: "Données spécifiques à la question",
        optional: false,
        // on ne peut pas valider ces données de manières standard
        // puisqu'elles dépendent du type de question. La validation devra
        // donc être déléguée au "générateurs de questions"
        blackbox: true,
    },
}));

