<template>
  <div class="home">
    <div class="title">
      <h1 class="title__main">나는 어떤 음료일까?</h1>
      <h2 class="title__sub">음료로 알아보는<br />나의 성격</h2>
    </div>
    <button class="btn--start" @click="testStart">시작하기</button>
    <footer>copyrigth (C) 앞잡이들</footer>
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
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #815854;
}
.title {
  margin-bottom: 80px;
}
.title__main {
  font-size: 60px;
  margin-bottom: 20px;
}
.title__sub {
  font-size: 40px;
  line-height: 50px;
}
.btn--start {
  width: 200px;
  height: 80px;
  font-size: 30px;
  line-height: 80px;
  color: #815854;
  background-color: transparent;
  border: 3px solid #815854;
  border-radius: 5px;
}
.btn--start:hover {
  color: #ffffff;
  background-color: #815854;
}
footer {
  position: absolute;
  bottom: 10px;
}

@media screen and (max-height: 576px) {
  .title {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 576px) {
  .title__main {
    font-size: 40px;
  }
  .title__sub {
    font-size: 30px;
    line-height: 40px;
  }
  .btn--start {
    width: 150px;
    font-size: 30px;
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  .title__main {
    font-size: 50px;
  }
  .title__sub {
    font-size: 40px;
  }
}
</style>
