import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/main.scss';

// import 'flexboxgrid-sass/flexboxgrid.scss';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './global'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
