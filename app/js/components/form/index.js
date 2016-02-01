import Ractive from 'ractive';
import Template from '../../../views/components/form.html';

var form = Ractive.extend({
    template: Template,
    data: {
      green: 0,
      red: 0,
      blue: 0
    }
});

export default form;
