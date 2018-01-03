import Vue from 'vue';
import Router from 'vue-router';
import ToDevelop from './pages/to-develop';
import ProjectFeatures from './pages/project-features';
import Gettingstarted from './pages/getting-started';
import ExamplesStyling from './pages/examples-styling';
import ExamplesAutocomplete from './pages/examples-autocomplete';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'features',
  component: ProjectFeatures,
}, {
  path: '/start',
  name: 'gettingStarted',
  component: Gettingstarted,
}, {
  path: '/examples/styling',
  name: 'examples.styling',
  component: ExamplesStyling,
}, {
  path: '/examples/autocomplete',
  name: 'examples.autocomplete',
  component: ExamplesAutocomplete,
}, {
  path: '/develop',
  name: 'develop',
  component: ToDevelop,
}];

const router = new Router({ routes });

export default router;