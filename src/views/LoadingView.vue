<template>
  <div>
    {{ cntr }}
    <div v-if="tf">
      <button @click="goResult">zz</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      str: "",
      cnt: 3,
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

<style></style>
