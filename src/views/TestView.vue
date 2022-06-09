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
        "꽤 오랫동안 과제만 하다 보니 집중이 풀렸어...",
        "갑자기 옆자리에서 나를 보는 것 같은 시선이 느껴진다",
        "평소에 인사만 주고받던 동기가 카페에 들어왔다.",
        "드디어 완성! 팀플 단톡에 자료를 올렸다. 내가 팀원들에게 듣고 싶은 말은?",
        "집에 돌아가는 길, 술에 취한 건가? 어떤 사람이 길에 주저앉아있다",
        "집에 도착해서 핸드폰을 확인해보니 오랜만에 친한 친구에게 카톡이 와있었다.",
        "친구와 대화를 주고 받다 보니, 친구가 조만간 공연을 한다는 사실을 알게 된다. 시간만 되면 와도 좋다고 하는데...",
      ],
      answer: [
        [`그냥 내일 일어나서 생각할래~`, `이게 좋겠다! 미리 정해둬야지.`],
        [
          `가면서 찾아봐야지~ 오 저기 좋아 보이는데? 오늘은 여기다!`,
          `당연히 미리 정해뒀지~ 여기서 이쪽으로 쭉 가면... 오늘의 카페는 이 곳!`,
        ],
        [
          `오, 신메뉴가 나왔네. 내 취향인데 한 번 도전해볼까?`,
          `음, 역시 먹던 게 최고지, 항상 먹던 걸로.`,
        ],
        [
          `저 사람이 두고 간 게 맞나...? 여기 두면 금방 찾으러 오시겠지.`,
          `엇 두고 가신건가? 나가시기 전에 빨리 찾아드려야겠다. "저기요~"`,
        ],
        [
          `아직은 할 때가 아닌 것 같다. 10분만 쉬려다 한 시간 쉬어버린다.`,
          `미리 짜둔 계획에 맞게 과제 할 시간과 쉬는 시간을 계산한다.`,
        ],
        [
          `오늘 하늘이 되게 푸르네... 저 꽃은 무슨 꽃이지...? 이름 기억날 것 같은데... 꼬리에 꼬리를 무는 의식의 흐름.`,
          `멍— 나는 아무 생각이 없다... 눈에 초점도 없는 듯.`,
        ],
        [
          `왜 나를 쳐다보는 것 같지? 내가 뭘 잘못했나...? 괜히 신경 쓰이네...`,
          `나 보는 건가? 음... 아니겠지. 신경 끄고 내 할 일이나 하자.`,
        ],
        [
          `앗, 어색한데... 못 본 척 고개를 돌린다.`,
          `엇, ㅁㅁ이잖아?! 친구를 향해 손을 흔들며 인사한다.`,
        ],
        [
          `내가 쓴 시간과 노력을 인정해주는 말.`,
          `피드백과 함께 능력을 인정해주는 말.`,
        ],
        [
          `저러다 무슨 일 생기는 거 아니야? 그냥 내버려 둬도 되려나... 어떡하지`,
          `뭐야 왜 여기 앉아있지? 피해서 가야겠다.`,
        ],
        [
          `친구가 나를 떠올려줬다는 점에 감동 받고 대화를 이어간다.`,
          `반가움도 잠시 갑작스러운 연락에 무슨 일인지 물어본다.`,
        ],
        [
          `혼자 가야 하나? 걱정되네... 조금 생각해보고 답한다.`,
          `재밌겠다! 당연히 혼자서라도 보러 가야지~ 공연 볼 생각에 신나 한다.`,
        ],
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
