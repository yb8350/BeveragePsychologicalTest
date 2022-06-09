const resultStore = {
  namespaced: true,
  state: {
    result: {
      ESFJ: {
        title: "따스하게 녹여주는 핫초코",
        tags: [
          "상담_천재",
          "계획적인_st",
          "똑부러지고_친절한_사람",
          "공감능력_최고",
        ],
        description: [
          "인간 관계가 틀어지면 스트레스를 많이 받아요.",
          "새로운 집단에 들어가면 어색한 걸 참지 못해서 먼저 말을 걸게 돼요.",
          "내 주변 사람들이 불행해하는 모습을 보면 나까지 불행해지는 기분이 들어요. 내 주변 사람들은 항상 행복했으면 좋겠어요.",
          "민폐끼치는거 너무X10000 싫어요. 그만큼 민폐끼치는 사람도 싫어요.",
          "웬만해서는 누군가와 손절하지 않아요.",
          "다른 사람을 돕기 위해 자신의 일을 소홀히 할 때도 있어요.",
          "자신이 봐도 감정기복이 큰 편인 것 같다고 생각해요. 친구의 말 한 마디에 기분이 나빠지기도 했다가 사소한 배려에 다시 기분이 좋아지기도 해요.",
          "체육대회, 장기자랑, 뒷풀이 등등 다같이 하는 일은 거의 다 즐거워요.",
        ],
        good: ["ISTP", "시큼새큼! 블루베리 스무디"],
        bad: ["", ""],
      },
      ENFJ: {
        title: "인간 활력소 라임 레몬 티",
        tags: ["따뜻함", "공감_천재", "배려심_최고", "내_추억_절대_지켜"],
        description: [
          "옛 추억을 다시 떠올리며 감상에 젖는 걸 정말 좋아해요. 그래서 가끔은 친구들에게 다같이 여행 갔던 사진을 보내기도 해요.",
          "마음이 따뜻하고 동정심이 많아요. 그래서 감정적인 공감을 정말정말 잘 해줘요.",
          "처음에는 누구에게나 친절하게 대해줘요. 그런데 그만큼 돌아오지 않으면 조금 서운해요.",
          "다른 사람 이야기를 경청해서 잘 들어줘요.",
          "가끔 내 속마음을 전혀 눈치채지 못하는 친구들을 보면 속상해요. 그런데 왜냐고 물어보면 설명하긴 어려워요.",
          "자신의 주변 사람들이 제일 소중해요. 가끔은 너무 정이 많아서 문제예요.",
          "모두가 자신을 좋아했으면 좋겠다고 생각해요. 누군가에게 미움 받는 건 정말정말 싫은 일이거든요.",
          "다른 사람들에게 진심이 가득 담긴 칭찬을 들은 날은 최고의 기분으로 하루를 보낼 수 있어요.",
          "기분 나쁜 일이 생겨도 긍정적으로 생각하려고 노력해요. 그런 행동을 한 이유가 있었을 것 같아서 내가 이해하는 게 편해요.",
        ],
        good: ["INFP", "감성 가득 카페라떼"],
        bad: ["", ""],
      },
      ESTJ: {
        title: "전통을 중시하는 녹차",
        tags: ["객관적", "원리원칙주의", "분석적", "결론만_얘기해"],
        description: [
          "열심히 산다는 말을 한 번 쯤은 꼭 들어봤어요. 하지만 자신은 아니라고 생각할 때가 많아요.",
          "텐션 차이가 커서 높을 땐 굉장히 높고, 낮을 땐 굉장히 낮아요.",
          "뭐든지 빨리 빨리! 성격이 급한 편이에요.",
          "효율적인게 좋아서 어딘가에 갈 때 최대한 짧은 루트를 찾아가려고 하는 편이에요.",
          "계획적이고 효율적이기 때문에 스케줄 관리를 잘 해요.",
          "법은 지키라고 있는 법. 원리원칙에 민감해서 중요하게 생각해요.",
          "자기 일을 게을리 하는 사람이나, 일 못하는 사람을 별로 좋아하지 않아요.",
          "돌려 말하는 것 보다 직설적으로 말해주는게 좋아요. 돌려 말하는 건 괜히 시간만 더 끈다고 생각해요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ENTJ: {
        title: "내가 제일 잘 나가 후르츠 파르페",
        tags: ["열정맨", "팩트폭력배", "타고난_리더", "세상_적극적"],
        description: [
          "말을 할 때 직설적으로 표현하는 편이에요. 그렇다보니 종종 팩트폭력을 날리기도 해요.",
          "자기 주장이 뚜렷해요. 그래서 의견을 내세울 때 자기 의견을 굽히지 않아요.",
          "리더 기질을 타고나서 어디서든 리더 역할이 잘 어울려요.",
          "팀 활동 시, 자신만 적극적일 경우 상처를 받기도 해요. 그래도 금방 잊고 어느샌가 또 제일 적극적으로 활동하고 있어요.",
          "별로 생산적이지 않은 행동은 보고 있기 힘들어요. 그래서 더 적극적으로 활동하는 면이 있어요.",
          "비효율적인 것도 싫지만, 대충하는 것도 싫어요. 대충하는 것은 안 하니만 못 하다고 생각해요.",
          "하고자 하는 일은 무!조!건! 해야 해요. 아무도 당신을 말릴 수 없어요.",
          "세상에서 자기 자신이 제일 좋아요. 그래서 자기애, 자존심, 자존감이 다 강해요.",
          "다른 사람에게 약한 모습 보여 주는 걸 싫어해요. 그래서 힘들어도 티내지 않아요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ESFP: {
        title: "깨끗하게 맑게 자신있게! 이온 음료",
        tags: ["단순", "활발", "할일_미루기_대장", "분위기메이커"],
        description: [
          "상대방이 재미없는 말을 해도 반응을 엄청 잘 해줘요. 그런데 속으로는 다른 생각할 때도 종종 있어요.",
          "할 일을 끝까지 미루고 미루다가 발등에 불이 떨어져야 시작해요. 그런데 어떻게 되기는 해서 다음 번에도 또 미루고 있어요.",
          "사람들에게 인정 받고 싶고 주목 받고 싶어요.",
          "틀에 박힌 건 딱 질색이에요.",
          "사람들이 좋긴 한데, 나가는 게 귀찮은 건 어쩔 수 없어요.",
          "처음 만났을 때부터 자신의 높은 텐션을 보여주진 않지만, 친해지고 나면 누구보다 활발하고 텐션이 하늘을 찔러요.",
          "자신이 오늘만 사는 것 같다고 생각해 본 적이 있어요.",
          "친구들에게 깜짝 이벤트를 해주는 걸 좋아해요. 물론 내가 받는 것도 즐거워요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ENFP: {
        title: "어디든 빠질 수 없지! 맥주",
        tags: ["행복전도사", "관종", "수다쟁이", "하고싶은건_다_할래"],
        description: [
          "사람이 정말정말 좋아요. 친구들하고 노는 게 제일 즐거워요. 그래도 가끔은 혼자만의 시간이 필요하다고 생각해요.",
          "모두가 행복한 생각만 하는 줄 알지만, 자기 나름대로의 우울함이 있어요. 그래도 그게 오래 가지는 않아요.",
          "공감을 잘 해주다 보니, 자신에게 고민 상담을 하는 친구들이 많아요.",
          "딱 하나에만 집중하는 게 어려워요. 한 번에 이것도 하고 싶고 저것도 하고 싶어요.",
          "친구들과 대화하다보면 이야기 주제가 휙휙 바뀌곤 해요.",
          "계획이 있더라도 갑자기 더 하고 싶은게 생기면 하고 싶은 걸 하는 편이에요.",
          "낯을 가리거나 어색할 때에는 말이 많아지는 편이에요. 어색한 분위기 못 참아!",
          "관심 받는 것을 좋아해요. 자신이 그 모임의 중심이었으면 해요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ESTP: {
        title: "톡톡 튀는 새콤함, 청포도 에이드",
        tags: ["시원함", "솔직함", "흥청망청", "근거없는_자신감"],
        description: [
          "돈 쓰는 게 세상에서 제일 즐거워요. 돈은 쓰려고 버는 것 아니겠어요?",
          "규칙은 깨라고 있는 법! 무언가에 얽매이는 게 정말 싫어요.",
          "하고 싶은건 해야해요. 말보다 행동이 앞서기 때문에 이미 실행하고 있어요. 그래서 시원시원한 성격이에요.",
          "대범하게 일을 하다보니 내일 없이 사는 걸로 보일 수도 있어요.",
          "누군가에게 잘 보이기 위해서 아부하는 건 별로 하고 싶지도 않고 잘 하지도 못해요. 솔직한 게 최고니까요!",
          "무슨 일을 시작할 때 왠지 자신감이 있어요. 이 자신감의 출처는 자신도 잘 몰라요.",
          "섬세하고 꼼꼼하거나 복잡하고 난해한 것은 별로에요.",
          "떠나간 인연에는 크게 미련을 두지 않아요. 그래서 가는 사람 안 붙잡고 오는 사람 안 막아요.",
          "남들에게 그닥 관심이 없어요. 그만큼 남들도 자신에게 관심 안 주고 터치하지 않았으면 좋겠어요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ENTP: {
        title: "풍부하고 깊은 매력이 있는 와인",
        tags: ["#토론왕", "호불호_명확", "도전정신", "내_앞에선_험담_금지"],
        description: [
          "자기자신을 누구보다 제일 잘 알아요. 그러니 다른 사람들이 자신을 평가할 필요가 없다고 생각해요.",
          "남들이 자신을 재밌어하며 웃어줄 때 에너지를 얻어요.",
          "특이하고 특별한 사람이고 싶어해요. 남들과는 다른 것을 즐겨요.",
          "말주변이 뛰어나다는 말을 종종 들어요. 자신이 생각해도 말 하나는 잘 하는 편인 것 같아요.",
          "가끔 다른 사람과 논쟁을 펼칠 때도 있지만, 그건 싸우기 위해서가 아니라 단순히 재밌기 때문이에요.",
          "어떻게든 자신의 말이 맞다는 걸 증명하고 싶어요.",
          "한 번 한다고 마음먹은 일은 반드시 해낸답니다. 하지만 남이 시키는 건 별로 흥미가 안 생겨요.",
          "새로운 도전을 할 때 친구들과 함께하는 것도 좋지만 혼자서 하는 것도 좋아요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ISFJ: {
        title: "무엇이든 잘 어울리는 우유",
        tags: ["익숙한게_최고", "싸움_싫어", "착함_친절함_섬세함_따뜻함"],
        description: [
          "착하고 친절하고, 섬세하고 따뜻한 사람이에요! 그래서 모두와 좋은 관계를 가지고 있어요.",
          "갑작스러운 변화는 딱 질색이에요. 익숙한게 제일 좋아서 새롭게 도전하거나 모험하는 일이 잘 없어요.",
          "다른 사람들에게 숨겨진 속마음을 잘 이야기하지 않아요.",
          "상처를 받더라도 괜찮은 척, 아무렇지 않은 척 해요. 그래서 주변 사람들은 상처를 받았는지도 잘 모르는 경우가 많아요.",
          "의견이 있어도 끝까지 주장하지 못하고 다수에 따르는 편이에요. 끝까지 주장했다가 틀리는 게 더 싫어요.",
          "사실 속으로는 굉장히 계산적이고 개인주의적인 면이 있어요.",
          "시끄럽고 사람 많은건 딱 질색이에요.",
          "남을 잘 챙겨줘요. 싫다 귀찮다 하면서도 주변 사람들을 다 신경쓰고 챙겨줘요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      INFJ: {
        title: "달콤하고 부드러운 아인슈페너",
        tags: [
          "내집단_외집단",
          "상상",
          "고민",
          "시크해보이지만_사실_부드러운사람",
        ],
        description: [
          "행동하기 전에 혼자 머릿속으로 모든 변수를 다 계산해놓는 편이에요. 그리고 그 변수마다 대처 방법까지 생각해두지요. 원래 생각이 많아서 이 정도는 기본이에요.",
          "겉으로는 시크해보일 수 있지만 속은 말랑말랑하고 따뜻한 사람이에요.",
          "친구 얘기를 들을 때 공감도 잘 해주고 리액션도 정말정말 잘 해줘요.",
          "자신이 정해둔 선을 계속 넘는 사람과는 절대 친하게 지내고 싶지 않아요.",
          "남들이 보기엔 별 것 아닌 일 같지만 엄청 깊게 고민하고 있어요.",
          "친구들의 성격에 잘 맞춰주는 편이에요. 조용한 친구랑 있으면 먼저 말 걸고 대화를 이끌어 가지만, 활발한 친구랑 있으면 다 들어주고 맞장구해줘요.",
          "여러 명이서 다같이 노는 것보다 단 둘이 1:1로 노는 게 더 좋아요.",
          "가끔 죽음, 우주, 인간과 관련된 철학적인 생각을 깊게 하곤 해요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ISTJ: {
        title: "쌉쌀함 뒤에 숨겨진 따뜻함, 대추 생강차",
        tags: ["안정적", "거짓말은_NO", "약속_꼭_지켜", "TMI_어쩌라고"],
        description: [
          "다채롭고 변화하는 것 보다, 단정하고 안정적인걸 좋아해요.",
          "사실만을 이야기하고 싶어요. 그래서 거짓말에 서툰 편이에요.",
          "겉으로는 괜찮은 척 하지만 이미 마음은 떠나있을 수 있어요. 한 번 마음을 닫으면 다시 잘 열지 않아요.",
          "책임감이 강해요. 이런 면때문에 깐깐한 잔소리쟁이로 보일 수 있어요.",
          "약속은 약속! 시간 약속이 제일 중요해요. 그래서 갑자기 약속이 바뀌어버리면 정말 싫어요.",
          "내 사람은 정말 잘 챙겨줘요. 하지만 내 사람이 아니라면 챙기고 말고 할 것도 없어요.",
          "일방적으로 얘기를 듣기만 하는 건 싫어요. 얘기는 서로 주고받는 것이니까요.",
          "평소에 '어쩌라고'라는 생각을 제일 많이해요. 특히 TMI를 들을 땐 무의식적으로 '어쩌라고' 라는 말이 떠올라요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      INTJ: {
        title: "자부심 가득한 흑당 버블티",
        tags: [
          "팩트폭행",
          "독립적",
          "깊은생각",
          "혼자있기",
          "평화로운_일상",
          "감정에_휘둘리지_않아",
        ],
        description: [
          "다른 사람들에 비해 인간관계에 대한 관심이 적은 편이에요.",
          "독립적인 성향이 강해요. 함께 하는 것 보다 혼자 하는게 편해요.",
          "가끔 엄청나게 깊은 생각에 빠져들 때가 있어요, 그래서 혼자있는 걸 좋아하고 즐기기도 해요.",
          "그 무엇보다 정확한 사실, 즉 팩트가 가장 중요해요.",
          "감정에 휘둘리는 것을 별로 좋아하지 않아요.",
          "거짓말을 잘 못해서, 다른 사람의 비위를 맞추거나 입에 발린 칭찬을 잘 못해요. 그건 사실이 아니니까요!",
          "영혼이 없다, 리액션이 없다 라는 말을 자주 듣는 편이에요. 하지만 정말 마음을 담아서 한 말이에요.",
          "예기치 못한 상황은 싫어요. 평화로운 일상이 좋아요. 갑작스러운 약속은 피해줬으면 좋겠어요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ISFP: {
        title: "가볍고 달콤한 아이스티",
        tags: [
          "미루기대마왕 ",
          "집순집돌이",
          "나_안_착해_근데_다들_착하대",
          "오만가지_상상하기",
        ],
        description: [
          "누구보다 귀찮다는 생각을 많이 해요. 아마 자신보다 더 귀차니즘 심한 사람은 없을 거라고 생각해요.",
          "발등에 불이 떨어져서 타들어가고 있지만 할 일을 더 미루곤 해요.",
          "약속이 취소되면 티는 안 내지만 속으로는 내심 기뻐하고 있어요. 집에서 더 뒹굴거릴 수 있으니까요.",
          "자신이 착하다고 생각하지 않는데 주변에서는 다들 착하다고 얘기해요.",
          "다른 사람의 부탁을 거절하기 어려워해요.",
          "누군가 자신에 대해 부정적으로 얘기하면 쉽게 상처를 받아요.",
          "미래보다는 현재! 지금 당장이 제일 중요해요.",
          "상대방에게 조금이라도 안 좋은 말을 내뱉는 것 보다는 자신이 손해를 보고 참는게 더 낫다고 생각해요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      INFP: {
        title: "감성 가득 카페라떼",
        tags: ["외유내강", "평화주의자", "생각_생각_생각_생각", "상상의_나래"],
        description: [
          "외유내강인 편이에요. 자기만의 신념이나 철학이 확고해요.",
          "자신이 좋아하고 관심있는 것에 대해 열의가 대단해요.",
          "호기심이 많아서 여러 분야의 지식이 굉장히 많아요.",
          "고집이 매우 세지만 평화주의자라서 남들의 의견을 수용해요.",
          "이런 생각까지 한다고? 싶을 정도로 본인이 느끼기에도 생각이 많아요.",
          "머릿속으로는 굉장히 생각이 많지만 결론은 단순명료해요.",
          "혼자만의 시간이 꼭 필요해요. 하지만 외로운 건 싫어요.",
          "상상력이 풍부해요. 이런 저런 생각들과 함께 여러 가지 상상의 나래를 펼칠 때가 많아요.",
          "칭찬은 고래도 춤추게 한다! 칭찬을 해주면 더 열심히 하게 돼요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      ISTP: {
        title: "시큼새큼! 블루베리 스무디",
        tags: [
          "현실적",
          "효율적",
          "인생은_흘러가는대로",
          "슬픔을_나누면_슬픈사람_두명",
        ],
        description: [
          "남을 위로해주는 일이 세상에서 제일 어려워요.",
          "남들에게 슬픈 얘기를 잘 하지 않아요. 슬픔을 나누면 슬픈 사람이 2명 된다고 생각하거든요.",
          "본인만의 기준선이 있어요. 그 기준선을 넘으면 불같이 화를 낼 수도 있어요.",
          "기준선이 낮은 편이라 평소에도 은은하게 화나 있어요.",
          "금방금방 화가 풀리고, 한 번 풀리면 뒤끝이 없어요.",
          "만사가 귀찮아요. 그래서 그냥 흘러가는대로 살자는 마인드가 있어요.",
          "관심 받는걸 좋아해요 하지만 시끄러워지는건 피하고 싶어요.",
          "혼자만의 문화생활을 즐겨요. 마이웨이가 편해요.",
          '굉장히 현실적으로 생각하고, 효율성 따지는 것을 좋아해요. 그래서 "굳이?"라는 말을 입에 달고 살아요.',
        ],
        good: ["", ""],
        bad: ["", ""],
      },
      INTP: {
        title: "나만의 특색을 가진 애플 시나몬 라떼",
        tags: ["나만의_룰", "능력중시", "서투른_감정표현", "나한테_참견_NO"],
        description: [
          "여럿과 어울려 지내는 것 보다 정말 친한 몇몇 사람이 있는게 좋아요. 그래서 인간관계가 깊고 좁은 편이에요.",
          "나름 자신만의 규칙이 있어서 자기 주관이 뚜렷해요.",
          "자신감은 낮을 수 있지만, 자존감은 누구보다 높아요.",
          "인성이 좋은 사람 보다 능력이 좋은 사람이 좋아요.",
          "분석하고 추리하는 것을 좋아해요. 그래서 논리가 없는 것을 굉장히 싫어해요.",
          "그렇지 않아 보인다 해도, 사실 감수성이 풍부한 편이에요. 감정 표현이 서툴러서 그런 것일 뿐이에요.",
          "누가 이래라 저래라 참견하는 것을 싫어해요. 알아서 잘 할 수 있으니까요.",
          "어떻게 해야 하는지 알지만 가끔 그냥 하고싶은 대로 할 때가 있어요.",
        ],
        good: ["", ""],
        bad: ["", ""],
      },
    },
  },
};
export default resultStore;
