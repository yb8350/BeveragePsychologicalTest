<template>
  <header>
    <div class="blank"></div>
    <router-link to="/" class="title">나는 어떤 음료일까?</router-link>
    <img
      :src="require(`@/assets/img/${bgmimg}.png`)"
      @click="music"
      alt="bgm"
      width="30px"
      class="bgmimg"
    />
  </header>
</template>

<script>
var audio = new Audio(
  "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
);
export default {
  data() {
    return {
      bgm: false,
      bgmimg: "bgmOff",
    };
  },
  methods: {
    music() {
      if (this.bgm === true) {
        this.bgm = false;
        this.bgmimg = "bgmOff";
        audio.pause();
      } else {
        this.bgm = true;
        this.bgmimg = "bgmOn";
        audio.play();
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #815854;

  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}

.blank {
  width: 40px;
}

.title {
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.bgmimg {
  margin-right: 10px;
  cursor: pointer;
}

@media screen and (max-width: 576px) {
  header {
    height: 40px;
    font-size: 16px;
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  header {
    height: 60px;
  }
}
</style>
