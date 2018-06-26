import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const EventBus = new Vue();

export default EventBus;

new Vue({
  render: h => h(App),
}).$mount('#app');
