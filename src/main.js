import Vue from 'vue'
import App from './App.vue'
import VueOnsen from 'vue-onsenui'
import router from './router'
import store from './store'
import {Steps, Step} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import './assets/modify.less'

VueOnsen.platform.isIOS(true)
Vue.use(VueOnsen)
Vue.use(Steps)
Vue.use(Step)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
