<template>
  <div class="test">
    <div class="headbar">
      <div class="back" @click="backbtn">
        <img src="../assets/img/back.png" alt="" width="16px" />
      </div>
      <div>{{ progress }} / 12</div>
    </div>
    <div class="progressbar">
      <div class="gauge"></div>
      <img src="../assets/img/coffee.png" alt="" width="30px" class="coffee" />
    </div>
    <div class="choice">
      <div class="question">
        <p>{{ questionText }}</p>
      </div>
      <div class="image">
        <img :src="require(`@/assets/img/test/no${progressper}.png`)" alt="" />
      </div>
      <div class="btnset">
        <button @click="btnClick(1)">{{ answerText(0) }}</button>
        <button @click="btnClick(2)">{{ answerText(1) }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      progressper: 1,
      result: [],
    };
  },
  computed: {
    ...mapState("questionStore", ["question", "answer"]),
    progress() {
      return this.progressper;
    },
    questionText() {
      return this.question[this.progressper - 1];
    },
    answerText() {
      return (num) => this.answer[this.progressper - 1][num];
    },
  },
  methods: {
    btnClick(num) {
      this.result.push(num);
      if (this.progressper + 1 === 13) {
        this.$router.push({ name: "loading", params: { res: this.result } });
      } else {
        this.progressper++;
        document.querySelector(
          ".gauge",
        ).style.width = `calc(100%/12*${this.progressper})`;
        document.querySelector(
          ".coffee",
        ).style.left = `calc(100%/12* ${this.progressper} - 10px) `;
      }
    },
    backbtn() {
      if (this.progressper === 1) {
        this.$router.push("/");
      } else if (this.progressper > 1) {
        this.progressper--;
        this.result.pop();
        document.querySelector(
          ".gauge",
        ).style.width = `calc(100%/12*${this.progressper})`;
        document.querySelector(
          ".coffee",
        ).style.left = `calc(100%/12* ${this.progressper} - 10px) `;
      }
    },
  },
};
</script>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f4f0;
  max-width: 600px;
  width: 90%;
  margin: 40px auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}
.headbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back img {
  cursor: pointer;
}
.progressbar {
  width: 100%;
  height: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px 0 20px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 2px;
  position: relative;
}

.gauge {
  width: calc(100% / 12);
  background-color: #ffa3a3;
  height: 16px;
  border-radius: 10px;
  transition: 0.5s;
}

.coffee {
  display: inline-block;
  position: absolute;
  top: -10px;
  left: calc(100% / 12 - 10px);
  transition: 0.5s;
}

.choice {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 20px 0;
}

.question {
  margin-bottom: 30px;
}

.question p {
  text-align: center;
  word-break: keep-all;
  max-width: 450px;
  font-size: 20px;
  height: 40px;
}

.btnset {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.btnset button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border-radius: 20px;
  background-color: #fff;
  border: 2px dashed #d8d8d8;
  margin: 10px 0;
  max-width: 400px;
  width: 100%;
  word-break: keep-all;
  padding: 10px;
  color: #202020;
  font-size: 18px;
}
.btnset button:hover {
  background-color: #ffa3a3;
  border: 2px dashed #d87d7d;
  color: white;
}
.image img {
  width: 90%;
}
</style>
