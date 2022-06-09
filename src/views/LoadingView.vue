<template>
  <div class="loading">
    <span class="text"></span>
    <div class="btn">
      <button @click="goResult" v-if="tf">결과보러 가기</button>
    </div>
    <div class="ad"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      result: null,
      str: "",
      cnt: 4,
    };
  },
  computed: {
    cntr() {
      return this.cnt;
    },
    tf() {
      return this.cnt === 0 ? true : false;
    },
  },
  created() {
    if (
      this.$route.params.res !== undefined &&
      this.$route.params.res.length === 12
    )
      this.result = this.$route.params.res;
    else this.$router.push({ name: "test" });
  },
  mounted() {
    this.timeCount();
    if (this.result !== null) {
      let str = "";
      str += this.result[3] + this.result[7] + this.result[11] < 5 ? "I" : "E";
      str += this.result[2] + this.result[5] + this.result[9] < 5 ? "N" : "S";
      str += this.result[6] + this.result[8] + this.result[10] < 5 ? "F" : "T";
      str += this.result[0] + this.result[1] + this.result[4] < 5 ? "P" : "J";
      this.str = str;
    }
    const content = "당신과 어울리는 음료를 만드는 중...";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
      if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
      }
    }
    setInterval(typing, 150);
  },
  methods: {
    timeCount() {
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          this.cnt--;
        }, (i + 1) * 1000);
      }
    },
    goResult() {
      this.$router.push({ name: "result", params: { res: this.str } });
    },
  },
};
</script>

<style scoped>
.loading {
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
button {
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: #fff;
  border: 2px dashed #d8d8d8;
  margin: 10px 0;
  max-width: 400px;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
  color: #202020;
  padding-top: 17px;
}
button:hover {
  background-color: #ffa3a3;
  border: 2px dashed #d87d7d;
  color: white;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 2rem;
  word-break: keep-all;
  text-align: center;
}

.ad {
  margin-top: 20px;
  width: 100%;
  height: 300px;
  background-color: gray;
}

.btn {
  height: 50px;
  display: flex;
  align-items: center;
  margin: 20px;
}
</style>
