Quiz = new Mongo.Collection('quiz');

Quiz.attachSchema(new SimpleSchema({
	instructions : {
		type: String,
		label: "Consigne",
		optional: true,
	}, 
	title: {
		type: String,
		label: "Titre",
		optional: false
	},
	tags: {
		type: [String],
		label: "Tags",
		optional: false,
		defaultValue: []
	},

	level : {
		type: String,
		label: "Niveau de difficulté",
		optional: true,
		allowedValues: [1, 2, 3, 4, 5]
	}, 

	// nombre d'étoiles pour le quiz. Permet aux professeurs d'indiquer si le
	// quiz est digne d'intérêt ou non. 
	rating : {
		type: String,
		label: "Évaluation (pédagogique) du quiz",
		optional: true,
		allowedValues: [1,2,3,4,5]
	}, 

	// statistiques assez élémentaires
	stats : {
		type: String,
		label: "Statistiques",
		optional: true,
	}, 

	// liste d'identifiants à la collection `questions`
	questions : {
		type: String,
		label: "Liste de questions",
		optional: false,
		defaultValue: []
	}, 

	// indique si le quiz doit s'afficher sur une seule page ou avec une
	// question par page, avec des commandes de navigation dans les questions
	// (menu à droite) ainsi que "précédent" et "suivant"
	type : {
		type: String,
		label: "Type",
		optional: false,
		defaultValue: "fixed",
		allowedValues: ["pages", "singlepage"]
	}, 

	//  indique si les questions doivent être affichées dans l'ordre spécifié
	//  par le tableau ou s'il faut les réordonner de manière aléatoire
	ordering : {
		type: String,
		label: "Ordre",
		allowedValues: ["random", "fixed"],
		optional: false,
	}, 


}));

// à rajouter : manière de pouvoir rajouter des commentaires concernant un
// quiz. Cela devrait probablement se faire dans une collection externe
// quizComments car les commentaires sont susceptibles de changer souvent. Il
// faut donc mieux les garder à part et ne pas les embeder. il faudra encore
// prendre cette décision plus tard.... 
