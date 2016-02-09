import Ractive from 'ractive';
import Template from '../../../views/components/gallery.html';
import blueimpGallery from '../blueimpGallery';

var gallery = Ractive.extend({
    template: Template,
    components: {
        blueimpGallery: blueimpGallery
    },
    data: {
        showUnsafeImages: false,
        totalSafeImages: 15,
        totalUnsafeImages: 13,
        safeSrc: 'img/safe',
        unsafeSrc: 'img/unsafe'
    },
    oncomplete: function() {
        this.on('toggleUnsafeImages', function() {
            var ractive = this;
            if(this.get('showUnsafeImages')) {
                return ractive.toggle('showUnsafeImages');
            }
            window.bootbox.dialog({
                title: '<div class="text-danger"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Etes-vous sûrs de vouloir afficher les images ci-dessous?</div>',
                message: '<p class="text-danger">Les images que vous êtes sur le point d\'afficher sont choquantes et risquent de heurter votre sensibilité.</br>Etes-vous sûr de vouloir continuer?</p>',
                buttons: {
                    danger: {
                        label: 'Oui',
                        className: 'btn-danger',
                        callback: function(){
                            ractive.toggle('showUnsafeImages');
                        }
                    },
                    main: {
                        label: 'Non',
                        className: 'btn-primary'
                    }
                }
            });
        });
    }
});

export
default gallery;
