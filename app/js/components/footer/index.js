import Ractive from 'ractive';
import Template from '../../../views/components/footer.html';

var footer = Ractive.extend({
    template: Template,
    oninit: function() {
        this.on('backToTop', function(event) {
            event.original.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
    }
});

export default footer;
