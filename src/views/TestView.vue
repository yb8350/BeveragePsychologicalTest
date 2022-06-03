<template>
  <div id="test">
    <div id="progressbar">진행상황 : {{ progress }} / 12</div>
    <div id="choice">
      <div class="question">
        <p>{{ questionText }}</p>
      </div>
      <div class="image">
        <img src="" alt="" />
      </div>
      <div class="btnset">
        <button @click="btnClick(1)">1</button>
        <button @click="btnClick(2)">2</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressper: 1,
      question: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      result: [],
    };
  },
  computed: {
    progress() {
      return this.progressper;
    },
    questionText() {
      return this.question[this.progressper - 1];
    },
  },
  methods: {
    btnClick(num) {
      this.result.push(num);
      this.progressper += 1;
      if (this.progressper === 13) {
        console.log("wow");
      }
    },
  },
};
</script>

<style></style>
