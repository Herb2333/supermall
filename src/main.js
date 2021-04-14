import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import toast from 'components/common/toast';
import FastClick from 'fastclick'
Vue.config.productionTip = false

Vue.use(toast)
FastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})

Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
