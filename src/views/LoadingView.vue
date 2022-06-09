<template>
  <div class="loading">
    <span class="text"></span>
    {{ cntr }}
    <div v-if="tf">
      <button @click="goResult">결과보러 가기</button>
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
      cnt: 0,
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
    // this.timeCount();
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
      for (let i = 0; i < 3; i++) {
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
  display: block;
  height: 50px;
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
  margin: 20px;
  width: 300px;
  height: 300px;
  background-color: gray;
}
/* 
.text {
  font-size: 20px;
  min-width: 11px;
  white-space: nowrap;
  margin: 0;
  color: transparent;
  transform: translate(-50%, -50%);
}

.text::before {
  content: "당신과 어울리는 음료를 만드는 중...";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: black;
  overflow: hidden;
  border-right: 1px solid black;
  animation: typing 3s steps(16);
}

@keyframes typing {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
} */
</style>
