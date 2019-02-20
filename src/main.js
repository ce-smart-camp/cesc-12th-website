import Vue from 'vue'
import Vuetify from 'vuetify'
import sal from 'sal.js'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'


import 'sal.js/dist/sal.css'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
})
Vue.use(vueSmoothScroll)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAG64BZJIAREfe1AbXxh3Pcylmqi7qENhw',
    libraries: 'places'
  }
})

Vue.use(Vuetify, {
  iconfont: 'fa'
})
new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.filter('two_digits', function (value) {
  if (value.toString().length <= 1) {
    return '0' + value.toString()
  }


  return value.toString();
});
window.onload = sal();

window.onload = sal({ rootMargin: "60% 20%" });