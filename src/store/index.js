import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import questionStore from "@/store/modules/questionStore.js";
import resultStore from "@/store/modules/resultStore.js";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    questionStore,
    resultStore,
  },
});
