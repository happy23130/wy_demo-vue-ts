import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

//引入样式
import "./assets/css/reset.css"
import "./assets/js/rem.js"

//做的是pc端的所以引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入字体图标库
import "./assets/fonts/iconfont.css"

//引入filters 过滤器
import "./filters/index"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
