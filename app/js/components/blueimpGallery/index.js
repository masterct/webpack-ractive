import Ractive from 'ractive';
import Template from '../../../views/components/blueimp.html';

var blueimpGallery = Ractive.extend({
    template: Template,
    oninit: function() {
      var src = this.get('src');
      var total = this.get('total');
      var imgs = [];
      for (var i = 0; i < total; i++) {
        imgs.push({
          name: 'Title',
          src: src,
          width: '100',
          height: '100'
        });
      };
      this.set('images', imgs);
    }
});

export default blueimpGallery;
