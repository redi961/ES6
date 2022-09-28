// function을 통한 함수 구축
/* function show () {
  console.log("show");
} */
function getRandomInt(min, max) {
  //Ceil -> 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
  min = Math.ceil(min);
  //Floor -> 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 함수가 한줄정도로 끝나는 짧은문장인 경우 중괄호 생략가능 return문 하나이면 return도 생략이 가능함 const show = ()
// => console.log("show : 화살표함수"); 화살표 함수형식으로 생성
const show = () => {
    //console.log("show : 화살표함수");

    const msgId = document.querySelector("#msg");

    // msgId.innerHTML = "<h2> 페이스북 </h2>"; console.log(msgId.innerHTML);
    // msgId.innerText = "<h2>페이스북<h2>" console.log(msgId.innerText);
    // msgId.textContent = "<h2>페이스북<h2>" console.log(msgId.textContent);

    //1. 태그만들기
    let tag = "";

  /*   for (let i = 1; i <= 2; i++) {
        // tag = tag + "<div class = 'divMsg' id='divId" + i + "'> </div>"; 템플릿 문자열
        // 백틱 이용하여 문구 작성
        //`<div class="divMsg"><img src="./image/${getRandomInt(1,6)}.png"></div>`
    } */

    //2. DOM에서 태그를 넣을 요소 선택
    const msgDiv = document.querySelector("#msg")

    //3. 선택된 요소의 HTML 강제변경
    tag = tag + `<div class="divMsg"><img src="./image/${getRandomInt(1,6)}.png" id = "msgImg"></div>`
    msgDiv.innerHTML = tag;

    console.log(getRandomInt(1,6));
    //3-1.스타일 변경
    msgDiv.style.backgroundColor = "aqua";

  
};

// DOM 요소가 생성된 후에 실행
document.addEventListener("DOMContentLoaded", () => {});