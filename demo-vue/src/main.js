import Vue from 'nativescript-vue'
import App from './components/App'


// Prints Vue logs when --env.production is NOT set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  "MaskedTextField",
  () => require("nativescript-masked-text-field").MaskedTextField
);

new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()