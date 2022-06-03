<template>
  <div class="home">
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
    },
  },
};
</script>
