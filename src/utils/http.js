import Vue from "vue"
import axios from "axios"

let baseUrl = "/api"
Vue.prototype.$pre = "http://localhost:4000"

//请求拦截
axios.interceptors.request.use(config => {
    config.headers.withCredentials = true;
    return config
})
//响应拦截

//数据交互