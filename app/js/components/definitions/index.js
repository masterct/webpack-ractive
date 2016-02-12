import Ractive from 'ractive';
import Template from '../../../views/components/definitions.html';

var definitions = Ractive.extend({
    template: Template,
    data: function() {
        return {
            definitions: [{
                name: 'Un migrant',
                content: 'Une personne qui se déplace d’un pays à un autre ou d’une région à une autre.<br>Ce départ est motivé pour de multiples raisons (par volonté individuelle ou forcés par les guerres ou les persécutions) et peut être permanent ou temporaire. Il y a des migrants qui se déplacent de leur propre gré et d’autres qui sont forcés (guerres ou persécutions).',
                ext: 'jpg'
            },{
                name: 'Un immigrant',
                content: 'Une personne qui s’établit temporaire ou définitivement dans un pays étranger au sien.',
                ext: 'jpg'
            },{
                name: 'Un demandeur d’asile',
                content: 'Une personne qui quitte son pays de résidence à la recherche d’une protection dans un autre pays, mais qui n’a pas encore obtenu le statut de réfugié.<br>Cette personne ne peut pas être renvoyé de force dans son pays pendant la procédure d’examen de sa demande d’asile. Elle ne peut pas être renvoyé dans son pays si sa vie ou sa liberté sont menacées (Source : Amnesty International, 2015).',
                ext: 'png'
            },{
                name: 'Un réfugié',
                content: 'Une personne qui a fui son pays parce qu’elle craint avec raison d’y être persécutée en cas de retour, du fait de son identité (origine ethnique, nationalité, appartenance à un groupe social), ses convictions religieuses ou ses opinion politiques.<br>Cette personne a obtenu son statut de réfugié politique (Source : Amnesty International, 2015).',
                ext: 'jpg'
            }]
        }
    }
});

export default definitions;
