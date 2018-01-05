// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
//import 'bootstrap';
import './assets/styles.scss';
import VueFormly from 'vue-formly';
import VueFormlyBootstrap from 'vue-formly-bootstrap';
import storageHelpers from './storageHelpers.js';

// START font awesome for vue config

// only import icons you use to reduce bundle size
import 'vue-awesome/icons/beer';

// import all icons
//import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

Vue.component('icon', Icon);

// END font awesome for vue config

Vue.use(VueFormly);
Vue.use(VueFormlyBootstrap);

// VuePersist config
import VuePersist from 'vue-persist';
Vue.use(VuePersist, {
  write(k, v) {
    storageHelpers.write(k, v);
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
