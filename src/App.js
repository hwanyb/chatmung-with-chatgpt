import React, { useState } from "react";

function App() {
  const [question, setQuestion] = useState('');
  const [reply, setReply] = useState('');

  const checkText = async() => {
    setReply("......");
    setQuestion("");


    if (question.length < 1) {
      setTimeout(() => {
        setReply("할 말을 적어달라 멍!");
      }, 1000);
    } else {
      if (question.includes("불꺼") || question.includes("불끄") || question.includes("불 꺼")) {
        setTimeout(() => {
          setReply("알겠다 멍! 불끄겠다 멍!");
          document.body.classList.add("dark");
          // base.classList.add("dark");
        }, 1000);
      } else if (question.includes("불켜") || question.includes("불키") || question.includes("불 켜")) {
        setTimeout(() => {
          setReply("알겠다 멍! 불키겠다 멍!");
          document.body.classList.remove("dark");
          // base.classList.remove("dark");
        }, 1000);
      } else if (question.includes("안녕")) {
        setTimeout(() => {
          setReply("안녕하다 멍!");
        }, 1000);
      } else if (question.includes("반가") || question.includes("반갑") || question.includes("방가")) {
        setTimeout(() => {
          setReply("나도 반갑다 멍!");
        }, 1000);
      } else if (question.includes("뭐해") || question.includes("뭐하")) {
        setTimeout(() => {
          setReply("니 생각한다멍~( ͡° ͜ʖ ͡° )");
        }, 1000);
      } else if (question.includes("사랑")) {
        setTimeout(() => {
          setReply("나도 사랑한다멍!💕");
        }, 1000);
      } else if (question.includes("더워") || question.includes("덥다") || question.includes("덥지") || question.includes("더운")) {
        const hotArr = ['헥헥 너무 덥다멍!', '바다에 퐁당 빠지고 싶은 날씨다 멍!', '에어컨 발명가에게 감사한 나날들이다멍!', '수영하고 싶다 멍!'];
        setTimeout(() => {
          setReply(hotArr[Math.floor(Math.random() * hotArr.length)]);
        }, 1000);
      } else if (question.includes("추워") || question.includes("춥다") || question.includes("춥지") || question.includes("추운")) {
        const coldArr = ['으으 너무 춥다 멍!', '온천에 몸을 푹 지지고 싶은 날씨다 멍!', '전기장판 발명가에게 감사한 날이다 멍!', '뜨거운 핫초코가 땡긴다 멍!'];
        setTimeout(() => {
          setReply(coldArr[Math.floor(Math.random() * coldArr.length)]);
        }, 1000);
      } else if (question.includes("몇 시") || question.includes("몇시") || question.includes("몇시야")) {
        const now = new Date();
        const getTime = now.getHours() + "시 " + now.getMinutes() + "분";
        const timeArr = [getTime + "이다 멍!", '섹시~💋', '접시~~😉', '택시~🚖', '낚시~🐟'];
        setTimeout(() => {
          setReply(timeArr[Math.floor(Math.random() * timeArr.length)]);
        }, 1000);
      } else {
        console.log("규칙에 없는 키워드 입력")
      }
    }
  }

  const onEnterDown = (e) => {
    if (e.key === 'Enter') {
      checkText();
    }
  }

  return (
    <div className="base">
      <div className="dogSays">
        <p className="dogText" id="dogConsole">{reply === "" ? "Welcome to 챗멍!" : reply}</p>
      </div>
      <div className="dog" />
      <div className="inputLayout">
        <input
          onChange={e => setQuestion(e.target.value)}
          placeholder='질문을 적어주세요.'
          value={question}
          type="text"
          id="console"
          className="inputStyle"
          autoFocus
          onKeyDown={e => onEnterDown(e)} />
      </div>
      <div id="button" className="button" onClick={checkText}>
        말걸기
      </div>
    </div>
  );
}

export default App;
