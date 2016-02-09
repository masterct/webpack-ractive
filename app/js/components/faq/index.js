import Ractive from 'ractive';
import Template from '../../../views/components/faq.html';

var faq = Ractive.extend({
    template: Template,
    data: function() {
        return {
            faqs: [{
                question: 'Pourquoi les pays du golfe Persique évitent-ils les réfugiés syriens?',
                answer: 'Ce sont plutôt les pays du Golfe qui interdisent l’entrée des réfugiés.<br>Ces pays seraient impliqués presque directement dans le conflit comme par exemple par le financement des groupes armés opposés. Les dirigeants en place dans ces pays, qui sont pour la plupart des dictateurs, craignent que les réfugiés déstabilisent la région ou leur pouvoir. Ces dirigeants craignent aussi les représailles de certains groupes armés.',
                isHidden: true
            }, {
                question: 'Pourquoi ces gens fuient-ils leur pays et veulent s’installer ailleurs?',
                answer: 'Ils fuient une guerre civile impitoyable dans laquelle ils sont les premières victimes. C’est une guerre où les massacres et les viols s’effectuent sans discrimination auprès de la population (femmes et enfants y compris).<br>La situation de ces personnes et de leur famille est désastreuse. Leurs maisons, leurs villages et leurs villes ont été détruits. Les infrastructures se sont détériorées ou ne fonctionnent plus. Il n’y a plus de nourriture ni d’eau potable, il n’y a presque plus de combustibles, etc.<br>Rester dans leur pays, c’est s’exposer à la misère, mais également aux menaces constantes des différents belligérants impliqués dans les combats. Ceux-ci n’hésitent pas à s’attaquer directement aux civils pour faire pression sur les combattants adverses. Les viols de femmes et d’enfants sont souvent utilisés pour semer la terreur, ainsi que le bombardement des quartiers de civils. Il est donc normal de vouloir quitter un tel contexte.',
                isHidden: true
            }, {
                question: 'Ces gens qui viennent ici ne risquent-ils pas de nous menacer à leur tour ? Des terroristes vont s’infiltrer?',
                answer: 'Les réfugiés sont de véritables victimes à la recherche de la paix.  Il n’y a personne qui voudrait subir ce que ces demandeurs d’asile subissent. Ce sont des familles avec femmes et enfants qui fuient leur pays en ayant entrepris un périple au risque de leur vie. De plus, ceux qui arriveront sur le sol canadien doivent se soumettre à une vérification sécuritaire par les services de sécurité canadiens. Les enfants et les femmes seront les premiers sélectionnés, ainsi que les minorités vulnérables.Les actes terroristes qui viennent d’arriver ne doivent pas être utilisés comme un argument afin d\'interdire ou ralentir l’arrivée des demandeurs d’asile. Cela risquerait de faire le jeu des terroristes qui tentent de diviser les populations. Les terroristes veulent jouer avec le sentiment xénophobe et islamophobe, afin de recruter des personnes qui se sentiraient exclues au sein de nos sociétés (leur vision du monde selon laquelle il y a une guerre entre l’Islam et l’Occident serait ainsi renforcée).<br>Leur religion, principalement l’Islam, mais aussi des chrétiens, kurdes, et autres minorités, ne permettent pas la guerre ou la violence. Ceux qui se «radicalisent » pervertissent la religion pour la soumettre à leur idéologie. Le danger des terroristes ne vient pas nécessairement des réfugiés. Il trouve souvent ses origines chez les gens d’ici, qui sont dans une situation d’isolement et qui se laissent convaincre par des idées toutes faites. Ces gens là fuient aussi une idéologie hideuse, mélangés à des intérêts économiques, politiques et militaires obscures, pourquoi et comment l’imposeraient-ils alors à un pays d’accueil?  Il faut souligner que la plupart des combattants en Syrie font partie des milices (en grande partie de jeunes marginaux provenant de partout dans le monde et entraînés en Syrie ou en Irak) qui combattent contre les forces du régime ou à ses côtés.',
                isHidden: true
            }, {
                question: 'S’ils viennent ici, ne vont-ils pas prendre nos emplois?',
                answer: 'Notre pays a besoin de l’immigration pour poursuivre sa croissance économique. Les demandeurs d’asile sélectionnés par le Canada sont souvent des personnes qualifiées qui exerçaient un travail chez eux et qui peuvent contribuer au développement de notre pays.<br>Souvent les citoyens issus de l’immigration se retrouvent avec les emplois que les autres citoyens ne veulent pas, car ils sont moins bien payés ou sont risqués. De plus, il y a plusieurs barrières systémiques empêchant les immigrants d’exercer les métiers qu’ils avaient avant d’arriver.',
                isHidden: true
            }, {
                question: 'Ils vont nous imposer leur culture plutôt que de s’intégrer?',
                answer: 'Ce sont des réfugiés. Ils n’ont pas le choix de quitter le lieu où ils vivent. La première attitude qui les habite face à l’aide qu’ils pourraient recevoir est la gratitude. Sociologiquement, une personne migrante va changer à travers le temps, car ils adoptent peu à peu les coutumes de la société d’accueil. S’ils rentrent dans leur pays après deux ou trois ans, ils vivent des difficultés d’intégration chez eux! Il y a même un choc culturel entre la deuxième et la première génération. ',
                isHidden: true
            }, {
                question: 'Avons-nous une bonne capacité d’accueil pour une telle quantité de personnes dans notre pays sans vivre des conséquences négatives ?',
                answer: 'Nous sommes plus de 30 millions d’habitants au Canada. Les 10 000 réfugiés, dont il est question par le gouvernement, représentent moins de 0,03 % de la population canadienne. En comparaison, le Liban, qui a une population de 4 millions d’habitants, a accueilli jusqu’à présent plus de 1,1 million de réfugiés, c’est-à-dire plus de 20 % de sa population ! Nous avons de la place et les ressources nécessaires pour accueillir ces personnes sans perturber notre mode de vie.',
                isHidden: true
            }, {
                question: 'Les réfugiés qui vivent de graves traumatismes ne vont-ils pas nous coûter cher en frais de santé ?',
                answer: 'La capacité de résilience des êtres humains est largement favorisée par le contexte positif dans lequel ils seront accueillis. Cela ne peut que contribuer à la guérison d’un traumatisme. De plus, n’oublions pas qu’il s’agit de sauver des vies qui, autrement, sont en danger.',
                isHidden: true
            }, {
                question: 'Nous avons déjà aidé des réfugiés dans le passé ici en région et ils sont tous partis vivre ailleurs. Alors, pourquoi les accueillir ici ?',
                answer: 'Les expériences vécues avec les Boat people (1979-80) et les Kosovars dans les années 1990 nous ont permis de participer généreusement à l’accueil de réfugiés qui, aujourd’hui, vivent en paix dans notre pays et contribuent à son avancement. Dans une région comme la nôtre, il faut sans doute augmenter nos structures d’accueil et d’accompagnement pour les immigrants en général afin de favoriser leur établissement au Saguenay-Lac-Saint-Jean. Pour cela, il faut nous mobiliser et exiger de nos élus, en partenariat avec les organismes socio-communautaires, l’établissement de mesures favorables et les fonds nécessaires.<br>Aussi, les anciens réfugiés n’ont pas trouvé plusieurs sources de travail dans la région, ils n’ont pas voulu rester dépendants des aides du système social et ils ont cherché un travail ailleurs.',
                isHidden: true
            }, {
                question: 'Ils reçoivent ou vont recevoir plus d’aide que moi ou les gens de la région?',
                answer: 'Ce n’est pas vrai. les aides sociales sont équitables pour tous ceux qui y ont droit. Aussi, les réfugiés passent par une phase transitoire dans laquelle ils prennent des aides sociales puis deviennent rapidement travailleurs dans des domaines demandés au Canada, contribuant par la suite eux même au développement économique du pays.',
                isHidden: true
            }, {
                question: 'Ils viennent profiter de l’aide sociale et de notre système de santé alors que les gens d’ici n’ont pas accès aux services?',
                answer: 'Les réfugiées qui viennent ici passent par une phase transitoire où ils ont accès à des services sociaux, puis ils “remboursent” ça en participant activement à la vie économique du pays. Ils contribuent aussi dans certains cas au développement démographiques (pour ceux qui vont s’installer définitivement au Canada.)',
                isHidden: true
            }, {
                question: 'Avons-nous assez de ressources pour les accompagner?',
                answer: 'Dans le passé, des familles de la région de Saguenay (et des familles du québecoises aussi) se sont mobilisé généreusement pour secourir des gens dans le besoin et fuyant la guerre et la misère tels que les bosniaques. Alors pourquoi pas maintenant ?',
                isHidden: true
            }, {
                question: 'Quels sont les aspects positifs à considérer dans l’accueil de réfugiés ?',
                answer: 'Faire le bien entraîne un sentiment de bien-être ! L’idée de contribuer à améliorer les conditions d’existence de personnes qui ne méritent aucunement ce qui leur arrive peut aider à se sentir soi-même bien.<br>Nous avons besoin de l’immigration pour conserver notre niveau de vie, financer nos services sociaux, notre éducation et notre système de santé, car notre population est vieillissante et nous avons besoin de main-d’oeuvre. Des travailleurs qualifiés apportent leur contribution aux impôts sur le revenu et par leur consommation, les familles paient des taxes qui supportent l’ensemble de nos infrastructures sociales et économiques.',
                isHidden: true
            }]
        }
    },
    oninit: function() {
        this.on({
            toggleAnswer: function(event) {
                event.original.preventDefault();
                this.toggle(event.keypath + '.isHidden');
            },
            showAll: function(event) {
                event.original.preventDefault();
                this.set('faqs.*.isHidden', false);
            },
            hideAll: function(event) {
                event.original.preventDefault();
                this.set('faqs.*.isHidden', true);
            }
        });
    }
});

export
default faq;
