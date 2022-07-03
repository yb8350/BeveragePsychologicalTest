<template>
  <div class="root">
    <div class="home">
      <div class="title">
        <h1 class="title__main"><mark>나는 어떤 음료일까?</mark></h1>
        <h2 class="title__sub">음료로 알아보는 나의 성격</h2>
      </div>

      <img
        class="randomImg"
        :src="require(`@/assets/img/result/ISFJ.png`)"
        alt="음료 랜덤 이미지"
      />
      <button class="btn btn--start" @click="testStart">시작하기</button>

      <!-- 내 결과 공유하기 -->
      <article class="share">
        <h2 class="share__title">
          <span><mark>테스트 공유하기</mark></span>
        </h2>
        <div class="share__type">
          <a v-for="type in shareType" :key="type.type" :href="type.link">
            <img
              :src="require(`@/assets/img/result/icon-${type.type}.png`)"
              alt=""
              srcset=""
            />
          </a>
        </div>
      </article>
    </div>
    <!-- FooterView -->
    <footer>copyright ⓒ FRoM</footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      shareType: [
        { type: "link", link: "javascript:void(0)" },
        { type: "kakao", link: "javascript:void(0)" },
        { type: "instagram", link: "javascript:void(0)" },
        { type: "facebook", link: "javascript:void(0)" },
        { type: "twitter", link: "javascript:void(0)" },
      ],
    };
  },
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
root {
  position: relative;
}

mark {
  display: inline-block;
  text-decoration: none;
  font-weight: normal;
  color: #815854;
  background: linear-gradient(to top, #ffa3a3 80%, transparent 50%);
}

.home {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #815854;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.title {
  margin-bottom: 20px;
}
.title__main {
  font-size: 50px;
  margin-bottom: 20px;
}
.title__sub {
  font-size: 30px;
}

.randomImg {
  width: 200px;
  margin-bottom: 20px;
}

.btn {
  padding: 14px 50px;
  padding-top: 20px;
  border-radius: 30px;
  background-color: #fff;
  border: 2px dashed #d8d8d8;
  font-size: 30px;
}
.btn--start {
  font-size: 30px;
  color: #815854;
  background-color: transparent;
  border: 3px solid #815854;
  border-radius: 5px;
  margin-bottom: 60px;
}
.btn--start:hover {
  color: #ffffff;
  background-color: #815854;
}

/* 테스트 공유하기 */
.share {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.share__title {
  position: relative;
  margin-bottom: 20px;
}
.share__title h2 {
  position: relative;
  font-size: 24px;
}
.share__title span {
  position: relative;
  z-index: 1;
}
.share__type {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.share__type a {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;
}
.share__type a:last-child {
  margin-right: 0;
}
.share__type a img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

footer {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  color: #815854;
}

@media screen and (max-width: 768px) {
  .title__main {
    font-size: 50px;
  }
  .title__sub {
    font-size: 30px;
  }
}
@media screen and (max-width: 420px) {
  .title__main {
    font-size: 32px;
  }
  .title__sub {
    font-size: 22px;
  }

  .btn {
    padding: 10px 40px;
    padding-top: 16px;
    font-size: 24px;
  }

  .share__type a {
    margin-right: 10px;
  }
  .share__type a img {
    width: 40px;
    height: 40px;
  }
}
</style>
