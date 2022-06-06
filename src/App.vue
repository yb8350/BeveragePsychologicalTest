<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view id="main" />
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>
<style>
@import url("@/assets/css/reset.css");

#main {
  position: relative;
  top: 80px;
}
body {
  background-color: #ddc6b6;
}
</style>
