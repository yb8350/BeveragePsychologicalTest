<template>
  <div id="app">
    <header-nav v-if="!homeCome"></header-nav>
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
  data() {
    return {
      isHome: true,
    };
  },
  computed: {
    homeCome() {
      return this.isHome;
    },
  },
};
</script>
<style>
@import url("@/assets/css/reset.css");
#main {
  margin-top: 80px;
}
</style>
