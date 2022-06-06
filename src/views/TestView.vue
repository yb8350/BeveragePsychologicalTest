<template>
  <div class="test">
    <div class="progressbar">진행상황 : {{ progress }} / 12</div>
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
export default {
  data() {
    return {
      progressper: 1,
      question: [
        "내일 과제도 할 겸 오랜만에 카페나 가볼까~ 옷은 뭘 입지?",
        "다음 날, 외출 준비 끝! 이제 나가볼까나? 오늘 갈 카페는...",
        "손님 주문 도와드리겠습니다~",
        "방금 일어난 사람이 두고간 물건을 발견했다. 아직 컵을 반납하고 있는데...",
        "음료를 받아왔다. 이제 과제를 시작해 볼까?",
        "6번문제",
        "7번문제",
        "8번문제",
        "9번문제",
        "10번문제",
        "11번문제",
        "12번문제",
      ],
      answer: [
        [`그냥 내일 일어나서 생각할래~`, `이게 좋겠다! 미리 정해둬야지.`],
        [
          `가면서 찾아봐야지~ 오 저기 좋아보이는데? 오늘은 여기다!`,
          `당연히 미리 정해뒀지~ 여기서 이쪽으로 쭉 가면... 오늘의 카페는 이 곳!`,
        ],
        [
          `오, 신메뉴가 나왔네. 내 취향인데 한 번 도전해볼까?`,
          `음, 역시 먹던게 최고지, 항상 먹던걸로.`,
        ],
        [
          `저 사람이 두고간 게 맞나...? 여기 두면 금방 찾으러 오시겠지.`,
          `엇 두고 가신건가? 나가시기 전에 빨리 찾아드려야겠다. "저기요~"`,
        ],
        [
          `아직은 할 때가 아닌 것 같다. 10분만 쉬려다 한 시간 쉬어버린다.`,
          `미리 짜둔 계획에 맞게 과제 할 시간과 쉬는 시간을 계산한다.`,
        ],
        [`1`, `2`],
        [`1`, `2`],
        [`1`, `2`],
        [`1`, `2`],
        [`1`, `2`],
        [`1`, `2`],
        [`1`, `2`],
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
      if (this.progressper + 1 === 13) {
        let str = "";
        str +=
          this.result[3] + this.result[7] + this.result[11] < 5 ? "I" : "E";
        str += this.result[2] + this.result[5] + this.result[9] < 5 ? "N" : "S";
        str +=
          this.result[6] + this.result[8] + this.result[10] < 5 ? "F" : "T";
        str += this.result[0] + this.result[1] + this.result[4] < 5 ? "P" : "J";
        this.$router.push({ name: "result", params: { res: str } });
      } else this.progressper += 1;
    },
  },
};
</script>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.choice {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btnset {
  display: flex;
  flex-direction: column;
}
</style>
