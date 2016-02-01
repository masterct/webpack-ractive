import Ractive from 'ractive';
import template from '../views/app.html';

import components from './components';
import decorators from './decorators';


let App = new Ractive({
  el: '#app',
  template: template,
  components: components,
  decorators: decorators
});

export default App;
