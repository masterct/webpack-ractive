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
    oninit: function(){
      this.on('toggleUnsafeImages', function(){
        this.toggle('showUnsafeImages');
      });
    }
});

export default gallery;
