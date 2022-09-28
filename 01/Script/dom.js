// function을 통한 함수 구축
/* function show () {
  console.log("show");
} */

// 함수가 한줄정도로 끝나는 짧은문장인 경우 중괄호 생략가능 return문 하나이면 return도 생략이 가능함 const show = ()
// => console.log("show : 화살표함수"); 화살표 함수형식으로 생성
const show = () => {
    console.log("show : 화살표함수");

    const msgId = document.querySelector("#msg");

    // msgId.innerHTML = "<h2> 페이스북 </h2>"; console.log(msgId.innerHTML);
    // msgId.innerText = "<h2>페이스북<h2>" console.log(msgId.innerText);
    // msgId.textContent = "<h2>페이스북<h2>" console.log(msgId.textContent);

    //1. 태그만들기
    let tag = "";

    for (let i = 1; i <= 3; i++) {
        // tag = tag + "<div class = 'divMsg' id='divId" + i + "'> </div>"; 템플릿 문자열
        tag = tag + `<div class='divMsg'>${i}></div>`
    }
    console.log(tag);
    //2. DOM에서 태그를 넣을 요소 선택
    const msgDiv = document.querySelector("#msg")

    //3. 선택된 요소의 HTML 강제변경
    msgDiv.innerHTML = tag;
};

// DOM 요소가 생성된 후에 실행
document.addEventListener("DOMContentLoaded", () => {});