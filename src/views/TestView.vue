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
        <button @click="btnClick(1)">{{ answerText(0) }}</button>
        <button @click="btnClick(2)">{{ answerText(1) }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressper: 1,
      question: [
        "1번문제",
        "2번문제",
        "3번문제",
        "4번문제",
        "5번문제",
        "6번문제",
        "7번문제",
        "8번문제",
        "9번문제",
        "10번문제",
        "11번문제",
        "12번문제",
      ],
      answer: [
        ["1z", "2z"],
        ["1d", "2d"],
        ["1", "2"],
        ["1", "2"],
        ["1", "2"],
        ["1", "2"],
        ["1", "2"],
        ["1", "2"],
        ["1", "2"],
        ["1", "2"],
        ["1", "2"],
        ["1", "2"],
      ],
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
    answerText() {
      return (num) => this.answer[this.progressper - 1][num];
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
