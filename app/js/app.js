import Ractive from 'ractive';
import fade from 'ractive-transitions-fade'
import crossroads from 'crossroads';
import hasher from 'hasher';
import template from '../views/app.html';

import components from './components';
import decorators from './decorators';
import routes from './routes'

Ractive.transitions.fade = fade;

let App = new Ractive({
  el: '#app',
  template: template,
  components: components,
  decorators: decorators,
  data: {
    hasCarousel: true,
    compName: 'carousel'
  }
});


routes.forEach(function(route){
  crossroads.addRoute(route.path, route.handler.bind(this, App));
});

//setup hasher
function parseHash(newHash, oldHash){
  crossroads.parse(newHash);
}

hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change


crossroads.routed.add(console.log, console);


export default App;
