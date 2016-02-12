import Ractive from 'ractive';
import Template from '../../../views/components/carousel.html';

var carousel = Ractive.extend({
    template: Template,
    data: function() {
      return {
        images: [{
          className: 'first',
          src: 'img/home',
          alt: 'First slide',
          title: 'Headline example',
          paragraph: 'Paragraph example',
          link: '#gallery',
          btnText: 'Browse gallery',
          width: 700,
          ext: 'jpg'
        }, {
          className: 'second',
          src: 'img/home',
          alt: 'Second slide',
          title: 'Second Headline example',
          paragraph: 'Second Paragraph example',
          link: '#gallery',
          btnText: 'Browse gallery',
          width: 700,
          ext: 'jpg'
        }, {
          className: 'third',
          src: 'img/home',
          alt: 'Third slide',
          title: 'Third Headline example',
          paragraph: 'Third Paragraph example',
          link: '#gallery',
          btnText: 'Browse gallery',
          width: 700,
          ext: 'png'
        }]
      };
    }
});

export default carousel;
