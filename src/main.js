import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueKakaoSdk from "vue-kakao-sdk";

const apiKey = "9f111600eb7451723e0ed0cab314d876";
Vue.config.productionTip = false;
Vue.use(VueKakaoSdk, { apiKey });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
