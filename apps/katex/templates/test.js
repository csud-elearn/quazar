

if ( Meteor.isClient ) {
    
    Template.katexHome.events({
        'keyup #expr-input': function (e, template) {
            e.preventDefault();
            var expr = $('#expr-input').val();
            console.log(expr);
            var parsed = KAS.parse(expr);
            console.table(parsed);
            var latex = parsed.expr.tex();
            latex = latex.replace(/\(/g, '\\left( ');
            latex = latex.replace(/\)/g, '\\right) ');
            latex = latex.replace(/(cdot)|\./g, '\\cdot ');
            latex = latex.replace(/(infty)|oo/g, '\\infty ');
            // pose des tas de problèmes
            // latex = latex.replace(/to/g, '\\rightarrow');

            console.log('latex : ' + latex);
            if (parsed) {
                katex.render(latex, document.getElementById("katex"), {displayMode: true});
            } else {
                $('#katex').text("Impossible de comprendre l'expression saisie");
            }


        }
    });

    Template.katexHome.helpers({

    });
    
}