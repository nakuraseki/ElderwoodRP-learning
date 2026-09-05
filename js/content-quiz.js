// Quiz d'affinité des maisons — La Source de Verre.
// Source de vérité : whitelist-panel/src/app/components/house-quiz/house-quiz.component.ts
// (50 questions, 10 tirées au sort, 4 réponses = 1 maison chacune, +1 point).
// Seule différence avec le panel : les accents ont été rétablis.
(function () {
    'use strict';

    window.HOUSE_QUIZ = {
        HOUSES: ['Falcon', 'Aerwyn', 'Brumval', 'Venatrix'],
        PER_RUN: 10,

        // Servent uniquement à l'écran d'intro (aucun impact sur le score).
        LORE: {
            Falcon: { icon: 'fas fa-feather-pointed', trait: 'Analyse & clarté' },
            Aerwyn: { icon: 'fas fa-bolt', trait: 'Action & instinct' },
            Brumval: { icon: 'fas fa-shield-heart', trait: 'Calme & soutien' },
            Venatrix: { icon: 'fas fa-chess-knight', trait: 'Stratégie & desseins' }
        },

        QUESTIONS: [
            {
                id: 1,
                text: "Lorsqu'on te confie une nouvelle tâche :",
                answers: [
                    { text: "Tu analyses tout d'abord comment tu vas t'y prendre avant de te mettre au travail, si tu fais quelque chose, c'est pour qu'il soit bien fait", house: 'Falcon' },
                    { text: "Tu te mets rapidement au travail, plus tôt tu commences, plus tôt tu auras fini", house: 'Aerwyn' },
                    { text: "Tu apprivoises la chose à ton rythme, pas besoin de se presser", house: 'Brumval' },
                    { text: "Tu cherches le meilleur moyen de la mettre à profit — à quoi ça servirait si ça t'est inutile ?", house: 'Venatrix' }
                ]
            },
            {
                id: 2,
                text: "Quand tu reçois un message important et ambigu :",
                answers: [
                    { text: "Tu relis plusieurs fois pour bien comprendre avant de répondre et t'assurer de dire les mots justes", house: 'Falcon' },
                    { text: "Tu cherches à répondre sans froisser la personne", house: 'Brumval' },
                    { text: "Tu réponds rapidement pour directement clarifier la chose", house: 'Aerwyn' },
                    { text: "Tu retournes la situation dans ta tête pour voir si on ne veut pas te tendre un piège", house: 'Venatrix' }
                ]
            },
            {
                id: 3,
                text: "Quand tu travailles avec d'autres personnes :",
                answers: [
                    { text: "Tu observes le fonctionnement général et travailles là où cela serait le plus efficace", house: 'Falcon' },
                    { text: "Tu soutiens où il y a besoin", house: 'Brumval' },
                    { text: "Tu prends naturellement des initiatives", house: 'Aerwyn' },
                    { text: "Tu repères vite les forces de chacun", house: 'Venatrix' }
                ]
            },
            {
                id: 4,
                text: "Face à une décision à prendre :",
                answers: [
                    { text: "Tu choisis ce qui paraît le plus direct", house: 'Aerwyn' },
                    { text: "Tu penses à l'impact sur les autres", house: 'Brumval' },
                    { text: "Tu envisages les options te bénéficiant le plus", house: 'Venatrix' },
                    { text: "Tu compares calmement les options", house: 'Falcon' }
                ]
            },
            {
                id: 5,
                text: "Si une réunion commence à déraper et s'éterniser :",
                answers: [
                    { text: "Tu recentres sur l'objectif ou le sujet de base pour augmenter la productivité", house: 'Falcon' },
                    { text: "Tu essaies de garder une bonne ambiance malgré tout", house: 'Brumval' },
                    { text: "Tu proposes de décider et d'avancer", house: 'Aerwyn' },
                    { text: "Tu observes qui influence vraiment la direction de la réunion", house: 'Venatrix' }
                ]
            },
            {
                id: 6,
                text: "Quand une tâche s'éternise :",
                answers: [
                    { text: "Tu t'appliques jusqu'à être satisfait", house: 'Brumval' },
                    { text: "Tu la finis rapidement, quitte à ce qu'elle ne soit pas correctement faite, pour passer à autre chose", house: 'Aerwyn' },
                    { text: "Tu la passes et y reviendras plus tard si tu juges qu'elle est nécessaire", house: 'Venatrix' },
                    { text: "Tu identifies le vrai blocage afin de le résoudre et d'avancer plus rapidement", house: 'Falcon' }
                ]
            },
            {
                id: 7,
                text: "Si quelqu'un te demande de l'aide à l'improviste :",
                answers: [
                    { text: "Tu aides si tu peux sans gâcher le travail déjà fait", house: 'Brumval' },
                    { text: "Tu fonces sans trop réfléchir", house: 'Aerwyn' },
                    { text: "Tu aides si tu y gagnes quelque chose", house: 'Venatrix' },
                    { text: "Tu demandes ce qui bloque exactement et essayes de comprendre comment tu peux aider", house: 'Falcon' }
                ]
            },
            {
                id: 8,
                text: "Dans une discussion animée :",
                answers: [
                    { text: "Tu cherches à comprendre les différents points de vue", house: 'Falcon' },
                    { text: "Tu apaises les tensions", house: 'Brumval' },
                    { text: "Tu interviens quand c'est pertinent", house: 'Aerwyn' },
                    { text: "Tu observes les dynamiques du groupe", house: 'Venatrix' }
                ]
            },
            {
                id: 9,
                text: "Quand tu dois apprendre quelque chose de nouveau :",
                answers: [
                    { text: "Tu cherches des explications claires ou un tutoriel structuré", house: 'Falcon' },
                    { text: "Tu demandes à quelqu'un de te montrer tranquillement", house: 'Brumval' },
                    { text: "Tu testes directement en faisant, quitte à te tromper, jusqu'à ce que tu réussisses", house: 'Aerwyn' },
                    { text: "Tu cherches à comprendre à quoi ça pourra te servir", house: 'Venatrix' }
                ]
            },
            {
                id: 10,
                text: "Quand tu arrives dans un groupe déjà formé :",
                answers: [
                    { text: "Tu observes les habitudes", house: 'Falcon' },
                    { text: "Tu t'intègres tranquillement", house: 'Brumval' },
                    { text: "Tu prends vite ta place", house: 'Aerwyn' },
                    { text: "Tu identifies rapidement les personnes pouvant apporter de la valeur", house: 'Venatrix' }
                ]
            },
            {
                id: 11,
                text: "Si un proche te raconte un problème personnel :",
                answers: [
                    { text: "Tu cherches à bien comprendre les faits avant de réagir", house: 'Falcon' },
                    { text: "Tu écoutes surtout pour le soutenir", house: 'Brumval' },
                    { text: "Tu proposes rapidement des idées d'actions concrètes", house: 'Aerwyn' },
                    { text: "Tu repères si tu peux t'identifier à ce problème", house: 'Venatrix' }
                ]
            },
            {
                id: 12,
                text: "Quand quelqu'un te critique :",
                answers: [
                    { text: "Tu écoutes et tu notes de manière calme pour transformer tes défauts en qualité", house: 'Falcon' },
                    { text: "Tu restes calme et poli tout en évitant de brusquer la personne te critiquant", house: 'Brumval' },
                    { text: "Tu réponds si la personne devient trop brusque", house: 'Aerwyn' },
                    { text: "Tu es sur la défensive", house: 'Venatrix' }
                ]
            },
            {
                id: 13,
                text: "Quand tu dois gérer plusieurs petites choses en même temps :",
                answers: [
                    { text: "Tu fais une sorte de mini-plan dans ta tête", house: 'Falcon' },
                    { text: "Tu avances petit à petit, sans te brusquer", house: 'Brumval' },
                    { text: "Tu passes vite d'une chose à l'autre pour vite en finir", house: 'Aerwyn' },
                    { text: "Tu hiérarchises ce qui aura le plus d'impact", house: 'Venatrix' }
                ]
            },
            {
                id: 14,
                text: "Dans ton organisation personnelle :",
                answers: [
                    { text: "Tu aimes la souplesse", house: 'Aerwyn' },
                    { text: "Tu gardes des repères simples", house: 'Brumval' },
                    { text: "Tu ajustes selon tes buts", house: 'Venatrix' },
                    { text: "Tu structures pour savoir où tu vas", house: 'Falcon' }
                ]
            },
            {
                id: 15,
                text: "Quand tu repenses à une situation passée :",
                answers: [
                    { text: "Tu analyses ce que tu en tires", house: 'Falcon' },
                    { text: "Tu te souviens surtout des réactions des gens", house: 'Brumval' },
                    { text: "Tu vois ce que tu ferais différemment", house: 'Aerwyn' },
                    { text: "Tu médites sur ce que ça t'a appris pour la suite", house: 'Venatrix' }
                ]
            },
            {
                id: 16,
                text: "Face à une responsabilité nouvelle :",
                answers: [
                    { text: "Tu essayes de la comprendre d'abord afin de l'exercer au mieux", house: 'Falcon' },
                    { text: "Tu la découvres étape par étape", house: 'Brumval' },
                    { text: "Tu passes directement à l'action", house: 'Aerwyn' },
                    { text: "Tu conçois une manière efficace de t'en servir", house: 'Venatrix' }
                ]
            },
            {
                id: 17,
                text: "Si quelqu'un ne respecte pas ce qui était prévu :",
                answers: [
                    { text: "Tu essaies de comprendre ce qui n'a pas été clair", house: 'Falcon' },
                    { text: "Tu restes poli et tu t'adaptes", house: 'Brumval' },
                    { text: "Tu réagis directement pour remettre les choses en place", house: 'Aerwyn' },
                    { text: "Tu ajustes ton approche avec cette personne pour la suite", house: 'Venatrix' }
                ]
            },
            {
                id: 18,
                text: "Si tu dois travailler seul :",
                answers: [
                    { text: "Tu planifies soigneusement", house: 'Falcon' },
                    { text: "Tu suis ton rythme naturel", house: 'Brumval' },
                    { text: "Tu avances à l'instinct", house: 'Aerwyn' },
                    { text: "Tu gardes un fil directeur clair", house: 'Venatrix' }
                ]
            },
            {
                id: 19,
                text: "Quand on te donne des consignes :",
                answers: [
                    { text: "Tu demandes des précisions", house: 'Falcon' },
                    { text: "Tu fais de ton mieux", house: 'Brumval' },
                    { text: "Tu improvises en cours de route", house: 'Aerwyn' },
                    { text: "Tu cherches la logique derrière", house: 'Venatrix' }
                ]
            },
            {
                id: 20,
                text: "Dans un groupe, tu es souvent celui qui :",
                answers: [
                    { text: "Celui qui clarifie", house: 'Falcon' },
                    { text: "Celui qui apaise", house: 'Brumval' },
                    { text: "Celui qui fait bouger les choses", house: 'Aerwyn' },
                    { text: "Celui qui oriente subtilement", house: 'Venatrix' }
                ]
            },
            {
                id: 21,
                text: "Si quelque chose t'ennuie :",
                answers: [
                    { text: "Tu cherches d'où vient ce malaise", house: 'Falcon' },
                    { text: "Tu prends sur toi et tu continues", house: 'Brumval' },
                    { text: "Tu passes rapidement à autre chose", house: 'Aerwyn' },
                    { text: "Tu vois comment en tirer quelque chose d'utile", house: 'Venatrix' }
                ]
            },
            {
                id: 22,
                text: "Quand tu fais une erreur :",
                answers: [
                    { text: "Tu l'analyses en détail pour ne plus la reproduire", house: 'Falcon' },
                    { text: "Tu l'assumes sereinement", house: 'Brumval' },
                    { text: "Tu corriges aussitôt", house: 'Aerwyn' },
                    { text: "Tu ne fais jamais d'erreurs !", house: 'Venatrix' }
                ]
            },
            {
                id: 23,
                text: "Quand tu dois donner ton avis sur une idée :",
                answers: [
                    { text: "Tu cites surtout les points forts et les limites concrètes", house: 'Falcon' },
                    { text: "Tu fais attention à la façon dont tu t'exprimes pour ne pas blesser", house: 'Brumval' },
                    { text: "Tu dis franchement ce que tu en penses", house: 'Aerwyn' },
                    { text: "Tu réfléchis à ce que cette idée pourrait devenir avec quelques ajustements", house: 'Venatrix' }
                ]
            },
            {
                id: 24,
                text: "Si tu n'es pas d'accord :",
                answers: [
                    { text: "Tu réfléchis avant de parler", house: 'Falcon' },
                    { text: "Tu évites d'entrer en conflit", house: 'Brumval' },
                    { text: "Tu le dis clairement", house: 'Aerwyn' },
                    { text: "Tu attends le moment le plus opportun pour l'exprimer", house: 'Venatrix' }
                ]
            },
            {
                id: 25,
                text: "Si on t'annonce un changement de plan de dernière minute :",
                answers: [
                    { text: "Tu essayes de comprendre les raisons derrière ce changement", house: 'Falcon' },
                    { text: "Tu essaies de faire avec sans trop te plaindre", house: 'Brumval' },
                    { text: "Tu te concentres sur ce qu'il faut faire dorénavant", house: 'Aerwyn' },
                    { text: "Tu regardes comment tirer parti de ce nouveau plan", house: 'Venatrix' }
                ]
            },
            {
                id: 26,
                text: "Quand tu es fatigué :",
                answers: [
                    { text: "Tu n'y vas pas trop fort", house: 'Brumval' },
                    { text: "Tu continues quand même", house: 'Aerwyn' },
                    { text: "Tu revois tes priorités, voir s'il n'y a pas une manière de faire moins fatigante", house: 'Venatrix' },
                    { text: "Tu prends du recul pour te préserver", house: 'Falcon' }
                ]
            },
            {
                id: 27,
                text: "Si quelqu'un hésite :",
                answers: [
                    { text: "Tu expliques plus clairement", house: 'Falcon' },
                    { text: "Tu encourages doucement", house: 'Brumval' },
                    { text: "Tu proposes d'essayer pour voir", house: 'Aerwyn' },
                    { text: "Tu montres les bénéfices possibles", house: 'Venatrix' }
                ]
            },
            {
                id: 28,
                text: "Dans une situation floue :",
                answers: [
                    { text: "Tu cherches de la clarté et des repères", house: 'Falcon' },
                    { text: "Tu fais confiance au processus", house: 'Brumval' },
                    { text: "Tu avances malgré le flou", house: 'Aerwyn' },
                    { text: "Tu gardes une marge de manœuvre", house: 'Venatrix' }
                ]
            },
            {
                id: 29,
                text: "Quand tu observes quelqu'un :",
                answers: [
                    { text: "Tu remarques les détails concrets", house: 'Falcon' },
                    { text: "Tu fais attention à l'ambiance autour de lui", house: 'Brumval' },
                    { text: "Tu captes surtout son énergie", house: 'Aerwyn' },
                    { text: "Tu perçois ses intentions", house: 'Venatrix' }
                ]
            },
            {
                id: 30,
                text: "Si tu dois improviser :",
                answers: [
                    { text: "Tu t'appuies sur ce que tu sais déjà", house: 'Falcon' },
                    { text: "Tu restes simple et prudent", house: 'Brumval' },
                    { text: "Tu te lances spontanément", house: 'Aerwyn' },
                    { text: "Tu ajustes en fonction de ce qui se passe", house: 'Venatrix' }
                ]
            },
            {
                id: 31,
                text: "Quand tu planifies quelque chose :",
                answers: [
                    { text: "Tu poses des bases solides", house: 'Falcon' },
                    { text: "Tu laisses de la souplesse", house: 'Brumval' },
                    { text: "Tu passes vite à l'action", house: 'Aerwyn' },
                    { text: "Tu pars du résultat que tu souhaites", house: 'Venatrix' }
                ]
            },
            {
                id: 32,
                text: "Si tu dois attendre :",
                answers: [
                    { text: "Tu observes ce qui se passe autour", house: 'Falcon' },
                    { text: "Tu prends ton mal en patience", house: 'Brumval' },
                    { text: "Tu cherches à accélérer le processus", house: 'Aerwyn' },
                    { text: "Tu en profites pour préparer la suite", house: 'Venatrix' }
                ]
            },
            {
                id: 33,
                text: "Face à un choix personnel :",
                answers: [
                    { text: "Tu réfléchis longuement", house: 'Falcon' },
                    { text: "Tu écoutes ton ressenti", house: 'Brumval' },
                    { text: "Tu tranches rapidement", house: 'Aerwyn' },
                    { text: "Tu choisis ce qui t'aidera plus tard", house: 'Venatrix' }
                ]
            },
            {
                id: 34,
                text: "Quand on te confie un secret :",
                answers: [
                    { text: "Tu le gardes pour toi et tu y réfléchis", house: 'Falcon' },
                    { text: "Tu le respectes profondément", house: 'Brumval' },
                    { text: "Tu n'en parles pas, point", house: 'Aerwyn' },
                    { text: "Tu le gardes en mémoire pour comprendre la personne", house: 'Venatrix' }
                ]
            },
            {
                id: 35,
                text: "Dans une routine :",
                answers: [
                    { text: "Tu cherches comment l'optimiser", house: 'Falcon' },
                    { text: "Tu apprécies la stabilité", house: 'Brumval' },
                    { text: "Tu t'en lasses assez vite", house: 'Aerwyn' },
                    { text: "Tu l'utilises pour avancer sur tes objectifs", house: 'Venatrix' }
                ]
            },
            {
                id: 36,
                text: "Quand quelque chose te motive :",
                answers: [
                    { text: "Tu veux comprendre toutes les facettes de cette chose", house: 'Falcon' },
                    { text: "Tu as envie de le partager", house: 'Brumval' },
                    { text: "Tu le fais à fond sans réfléchir aux conséquences", house: 'Aerwyn' },
                    { text: "Tu fais en sorte qu'il te serve", house: 'Venatrix' }
                ]
            },
            {
                id: 37,
                text: "Quand tu ressens une baisse de motivation :",
                answers: [
                    { text: "Tu cherches ce qui, précisément, te fait décrocher", house: 'Falcon' },
                    { text: "Tu te ménages un peu de temps pour souffler", house: 'Brumval' },
                    { text: "Tu te mets un petit défi ou une action rapide pour te relancer", house: 'Aerwyn' },
                    { text: "Tu repenses à tes objectifs", house: 'Venatrix' }
                ]
            },
            {
                id: 38,
                text: "Quand tu observes un échec :",
                answers: [
                    { text: "Tu en tires une leçon précise", house: 'Falcon' },
                    { text: "Tu soutiens ceux qui le vivent", house: 'Brumval' },
                    { text: "Tu repars sur autre chose", house: 'Aerwyn' },
                    { text: "Tu ajustes ta stratégie globale", house: 'Venatrix' }
                ]
            },
            {
                id: 39,
                text: "Quand tu dois finir quelque chose alors que tu n'as plus d'énergie :",
                answers: [
                    { text: "Tu réorganises ce qui reste à faire pour le rendre plus gérable", house: 'Falcon' },
                    { text: "Tu avances doucement mais tu continues", house: 'Brumval' },
                    { text: "Tu te boostes pour terminer d'un coup", house: 'Aerwyn' },
                    { text: "Tu décides si c'est vraiment prioritaire ou si ça peut attendre", house: 'Venatrix' }
                ]
            },
            {
                id: 40,
                text: "Si tu dois convaincre quelqu'un :",
                answers: [
                    { text: "Tu expliques avec des arguments clairs", house: 'Falcon' },
                    { text: "Tu rassures et mets en confiance", house: 'Brumval' },
                    { text: "Tu montres l'exemple par l'action", house: 'Aerwyn' },
                    { text: "Tu choisis soigneusement tes mots", house: 'Venatrix' }
                ]
            },
            {
                id: 41,
                text: "Quand tu dois choisir entre deux activités pour ton temps libre :",
                answers: [
                    { text: "Tu réfléchis à ce qui est le plus raisonnable ou utile", house: 'Falcon' },
                    { text: "Tu choisis ce qui te détendra le plus", house: 'Brumval' },
                    { text: "Tu choisis vite ce qui te tente le plus sur le moment", house: 'Aerwyn' },
                    { text: "Tu choisis ce qui s'inscrit le mieux dans tes projets perso", house: 'Venatrix' }
                ]
            },
            {
                id: 42,
                text: "Quand un ami est en retard sans prévenir :",
                answers: [
                    { text: "Tu te demandes ce qui a pu se passer et tu relativises", house: 'Brumval' },
                    { text: "Tu essaies de comprendre si vous vous étiez bien mis d'accord", house: 'Falcon' },
                    { text: "Tu fais autre chose en attendant", house: 'Aerwyn' },
                    { text: "Tu te dis que ça te montre quelque chose sur sa façon de fonctionner", house: 'Venatrix' }
                ]
            },
            {
                id: 43,
                text: "Si tout va trop vite :",
                answers: [
                    { text: "Tu ralentis pour ne pas bâcler les choses", house: 'Falcon' },
                    { text: "Tu ralentis pour souffler", house: 'Brumval' },
                    { text: "Tu apprécies ça et tu continues dans la lancée", house: 'Aerwyn' },
                    { text: "Tu te demandes si c'est la meilleure méthode pour atteindre ton objectif", house: 'Venatrix' }
                ]
            },
            {
                id: 44,
                text: "Si tu dois expliquer un sujet que tu connais bien à quelqu'un :",
                answers: [
                    { text: "Tu structures ton explication pour que ce soit clair", house: 'Falcon' },
                    { text: "Tu t'adaptes à son rythme et tu le rassures", house: 'Brumval' },
                    { text: "Tu expliques en mode spontané, avec des exemples concrets", house: 'Aerwyn' },
                    { text: "Tu relies le sujet à des choses plus larges pour donner du sens", house: 'Venatrix' }
                ]
            },
            {
                id: 45,
                text: "Si on te met la pression :",
                answers: [
                    { text: "Tu prends du recul", house: 'Falcon' },
                    { text: "Tu encaisses et tu tiens bon", house: 'Brumval' },
                    { text: "Tu réagis immédiatement", house: 'Aerwyn' },
                    { text: "Tu ignores et te concentres sur le plus important", house: 'Venatrix' }
                ]
            },
            {
                id: 46,
                text: "Quand tu penses à l'avenir :",
                answers: [
                    { text: "Tout est déjà planifié et réfléchi", house: 'Falcon' },
                    { text: "Tu espères surtout de la stabilité", house: 'Brumval' },
                    { text: "Tu n'y penses pas vraiment, tu prends les choses comme elles viennent", house: 'Aerwyn' },
                    { text: "Tu imagines des opportunités à créer", house: 'Venatrix' }
                ]
            },
            {
                id: 47,
                text: "Si tu dois commencer quelque chose que tu repousses depuis longtemps :",
                answers: [
                    { text: "Tu découpes en petites étapes pour t'y mettre", house: 'Falcon' },
                    { text: "Tu t'y mets doucement, sans te brusquer", house: 'Brumval' },
                    { text: "Tu fais un gros bloc d'un coup pour t'en débarrasser", house: 'Aerwyn' },
                    { text: "Tu te demandes d'abord si ça vaut vraiment la peine à long terme", house: 'Venatrix' }
                ]
            },
            {
                id: 48,
                text: "Quand tu réussis quelque chose que tu avais du mal à terminer :",
                answers: [
                    { text: "Tu cherches à comprendre ce qui a marché et ce qui bloquait", house: 'Falcon' },
                    { text: "Tu partages ton expérience avec les autres", house: 'Brumval' },
                    { text: "Tu passes vite à la suite", house: 'Aerwyn' },
                    { text: "Tu consolides ce que tu as construit", house: 'Venatrix' }
                ]
            },
            {
                id: 49,
                text: "Si tu devais te décrire :",
                answers: [
                    { text: "Observateur, analytique", house: 'Falcon' },
                    { text: "Constant, rassurant", house: 'Brumval' },
                    { text: "Réactif, entraînant", house: 'Aerwyn' },
                    { text: "Orienté objectifs et opportunités", house: 'Venatrix' }
                ]
            },
            {
                id: 50,
                text: "Au fond, ce qui te guide le plus :",
                answers: [
                    { text: "La compréhension", house: 'Falcon' },
                    { text: "L'équilibre", house: 'Brumval' },
                    { text: "Le mouvement", house: 'Aerwyn' },
                    { text: "Tes objectifs", house: 'Venatrix' }
                ]
            }
        ]
    };
})();
