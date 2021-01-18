import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);

import { actions } from "./actions"
import { mutations, state, getters } from "./mutations"

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {}
})