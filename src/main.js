
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'

// 导入mui的样式
import './lib/mui/css/mui.min.css'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
