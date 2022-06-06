<template>
  <div class="home">
    <h1 class="title">나는 어떤 음료일까?</h1>
    <h2 class="sub-title">음료로 알아보는<br />나의 성격</h2>
    <button @click="testStart">시작하기</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    testStart() {
      this.$router.push("test");
      this.$parent.$data.isHome = false;
    },
  },
  created() {
    this.$parent.$data.isHome = true;
  },
};
</script>

<style scoped>
.home {
}
.title {
  font-size: 50px;
}
.sub-title {
  font-size: 40px;
}
</style>
