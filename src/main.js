// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import App from './App'
import './style/main.scss'
import Vant from 'vant'
// import '../static/web-fonts-with-css/css/fontawesome-all.css'
import environmentUtil from './util/environmentUtil'
import Http from '@/util/httpUtil.js'
import store from './store'
import './permission'

Vue.use(Vant)

Vue.config.productionTip = false

Vue.prototype.$http = Http

environmentUtil.setAdaptive()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
