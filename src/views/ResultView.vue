<template>
  <div class="result">
    <article class="book">
      <!-- main__title -->
      <div class="main__title">
        <h1>{{ print.title }}</h1>
        <img :src="require(`@/assets/img/result/${res}.png`)" alt="" />
        <h2>
          <span v-for="(tag, idx) in print.tags" :key="tag">
            <mark>{{ addHash[idx] }}</mark>
          </span>
          <!-- <div class="highlight"></div> -->
        </h2>
      </div>
      <div class="main__desc">
        <div>당신은...</div>
        <ul>
          <li v-for="d in print.description" :key="d">{{ d }}</li>
        </ul>
      </div>
    </article>

    <article class="book">
      <!-- combi -->
      <h2 class="combi__title">
        <span><mark>유형별 궁합</mark></span>
        <!-- <div class="highlight"></div> -->
      </h2>
      <div class="combi__desc">
        <div class="combi__good">
          <h3>환상의 조합</h3>
          <img
            :src="require(`@/assets/img/result/${res}.png`)"
            alt=""
            srcset=""
          />
          <p>{{ print.good }}</p>
        </div>
        <div class="combi__bad">
          <h3>환장의 조합</h3>
          <img
            :src="require(`@/assets/img/result/${res}.png`)"
            alt=""
            srcset=""
          />
          <p>{{ print.bad }}</p>
        </div>
      </div>
    </article>
    <article class="book">
      <!-- type -->
      <h2 class="type__title">
        <span><mark>나와 같은 유형의 음료는?</mark></span>
        <!-- <div class="highlight"></div> -->
      </h2>
      <div class="type__desc">
        <p>{{ print.title }}</p>
        <p>{{ addPercentage }}</p>
      </div>
    </article>

    <article class="share">
      <h2 class="share__title">
        <span><mark>내 결과 공유하기</mark></span>
        <!-- <div class="highlight"></div> -->
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

    <article class="btn-group">
      <button class="btn btn--replay">다시하기</button>
      <button class="btn btn--other">다른 유형 보러가기</button>
    </article>
    <footer>copyright (C) 앞잡이들</footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      res: "",
      print: null,
      ratio: 33.3,
      shareType: [
        { type: "link", link: "javascript:void(0)" },
        { type: "kakao", link: "javascript:void(0)" },
        { type: "instagram", link: "javascript:void(0)" },
        { type: "facebook", link: "javascript:void(0)" },
        { type: "twitter", link: "javascript:void(0)" },
      ],
    };
  },
  created() {
    this.res = this.$route.params.res;
    this.print = this.result[this.res];
  },
  computed: {
    ...mapState("resultStore", ["result"]),
    addHash: function () {
      return this.print.tags.map(function (tag) {
        return "#" + tag;
      });
    },
    addPercentage: function () {
      return this.ratio + "%";
    },
  },
};
</script>

<style scoped>
/* .highlight {
  width: 100%;
  height: 80%;
  position: absolute;
  right: -3px;
  bottom: 2px;
  background-color: #ffa3a3;
} */
mark {
  display: inline-block;
  text-decoration: none;
  font-weight: normal;
  color: #000;
  background: linear-gradient(to top, #ffa3a3 80%, transparent 50%);
}

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  padding-bottom: 80px;
  margin-top: 20px;
}

.book {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f4f0;
  max-width: 600px;
  width: 90%;
  margin: 20px auto;
  padding: 30px;
  padding-top: 50px;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}
.book:first-child {
  padding-top: 50px;
}
.book::after {
  content: "";
  width: calc(100% - 100px);
  height: 80px;
  position: absolute;
  bottom: -58px;
  z-index: 1;
  background: url("../assets/img/result/bookwire.png") no-repeat;
  background-size: 100%;
}
.book:nth-child(3) {
  margin-bottom: 40px;
}
.book:nth-child(3)::after {
  background: none;
}

/* 결과 음료 */
.main__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.main__title img {
  width: 250px;
}
.main__title h1 {
  font-size: 30px;
  margin-bottom: 20px;
  word-break: keep-all;
}
.main__title h2 {
  position: relative;
  font-size: 24px;
}
.main__title h2 span {
  display: inline-block;
  position: relative;
  z-index: 1;
}
.main__desc {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: left;
}
.main__desc div {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}
.main__desc ul {
  margin-left: 16px;
  list-style: disc;
}
.main__desc ul li {
  margin-bottom: 16px;
  word-break: keep-all;
}
.main__desc ul li:last-child {
  margin-bottom: 0;
}

/* 유형별 궁합 */
.combi__title {
  position: relative;
  margin-bottom: 20px;
}
.combi__title span {
  position: relative;
  z-index: 1;
}
.combi__desc {
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
}
.combi__desc h3 {
  margin-bottom: 10px;
}
.combi__desc img {
  width: 130px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-bottom: 10px;
}
.combi__good {
  margin-right: 20px;
}

/* 나와 같은 유형의 음료는? */
.type__title {
  position: relative;
  margin-bottom: 20px;
}
.type__title span {
  position: relative;
  z-index: 1;
}
.type__desc {
  margin-bottom: 20px;
}
.type__desc p:first-child {
  font-size: 20px;
  margin-bottom: 20px;
}
.type__desc p:nth-child(2) {
  font-size: 36px;
}

/* 내 결과 공유하기 */
.share {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
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
  margin-right: 20px;
}
.share__type a:last-child {
  margin-right: 0;
}
.share__type a img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

/* 다시하기 */
.btn-group {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
.btn-group .btn:first-child {
  margin-bottom: 20px;
}
.btn {
  padding: 10px 60px;
  padding-top: 14px;
  border-radius: 30px;
  background-color: #fff;
  border: 2px dashed #d8d8d8;
  font-size: 30px;
  color: #202020;
}
.btn.btn--replay {
}
.btn.btn--replay:hover {
  background-color: #ffa3a3;
  border: 2px dashed #d87d7d;
  color: white;
}
.btn.btn--other {
  background-color: #ffa3a3;
  border: 2px dashed #d87d7d;
  color: white;
}
.btn.btn--other:hover {
  background-color: #fff;
  border: 2px dashed #d8d8d8;
  color: #202020;
}

/* FOOTER */
footer {
  position: absolute;
  bottom: 10px;
}

@media screen and (max-width: 768px) {
  .book::after {
    bottom: -60px;
  }
}
@media screen and (max-width: 576px) {
  .book {
    margin: 15px auto;
  }
  .book::after {
    bottom: -68px;
  }

  .title img {
    width: 200px;
  }
  .title h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .title h2 {
    font-size: 18px;
  }
}
@media screen and (max-width: 420px) {
  .book {
    margin: 10px auto;
  }
  .book::after {
    width: calc(100% - 60px);
    bottom: -68px;
  }

  .combi__good {
    margin-right: 0;
    margin-bottom: 30px;
  }

  .share__type a {
    margin-right: 10px;
  }
  .share__type a img {
    width: 40px;
    height: 40px;
  }

  .btn {
    padding: 10px 40px;
    padding-top: 16px;
    font-size: 26px;
  }
}
@media screen and (max-width: 340px) {
  .book::after {
    width: calc(100% - 30px);
    bottom: -74px;
  }

  .btn {
    font-size: 20px;
  }
}
</style>
