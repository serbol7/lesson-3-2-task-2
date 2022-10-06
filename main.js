import Vue from 'vue';
import App from './App.vue';

import data from './data';
import falert from './func';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

falert(data.message1);
falert(data.message2);
