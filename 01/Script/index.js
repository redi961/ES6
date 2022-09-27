/* 기존 함수 선언 방식
function funPrint() {
    console.log(n);
    console.log("외부 자바스크립트");
    console.log("버튼" + 1)
}
*/

//ES6+ 부터 화살표 함수
const funPrint = (n) => {
    // console.log(n); console.log("외부 자바스크립트");
    console.log(`버튼${n}`)
}

//변수

/*
console.log(x);
let x = 100;
x = 100 * 2;
console.log(x);
 */
/* JQuery
$document.ready() {

}
*/

// document.addEventListener("DOMContentLoaded",콜백함수);
// console.log(document.getElementById("bt").innerHTML); 익명 함수를 이용한 DOM제어
// document.addEventListener("DOMContentLoaded",function () {}); DOM이 생성이 되고 난
// 후에 요소 CRUD

document.addEventListener("DOMContentLoaded", () => {
    /*요소 생성*/
    /*
    // let bt = document.createElement("button")
    // document.getElementById("bt").append(bt); 결과 HTML Collection
    const bts1 = document.getElementsByClassName("bt1")
    console.log(bts1);

    //결과 HTML Collection
    const bts2 = document.getElementsByTagName("button")
    console.log(bts2);

    //결과 문자열
    const bts3 = document.querySelector(".bt1");
    console.log(bts3);
    */

    //결과 NodeList
    const bts4 = document.querySelectorAll(".bt1");
    /*   console.log(bts4); */

    /*
    //내부의 HTML 문구를 모두 긁어옴
    console.log(bts4[0].innerHTML);
    //텍스트만 가져옴
    console.log(bts4[0].innerText);
    console.log(bts4[1].textContent);
    */

    //반복문 for 변수이므로 let을 사용 (java는 let or const 둘중 하나만 사용함)
    /* for (let i = 0; i < bts4.length; i++) {
        console.log(typeof(bts4[i]));
        bts4[i].innerHTML =`mybutton${i+1}`
        console.log(bts4[i].innerHTML);
    } */

    // 반복문 for in => key 값만 추출함
    /*     for (let i in bts4) {
        console.log(i);
    } */

    // foreach => 메소드형식 중간에 종료할 수 없음
    /*    bts4.forEach((item) => {
        console.log(item.innerHTML);
    });

    bts4.forEach((item, idx) => {
        console.log(`${idx} : ${item.innerHTML}`);
    }); */

    // 반복문 for .. of 
    for(let item of bts4) {
        console.log(item.innerHTML);
    }
    for(let [idx, item] of bts4.entries()) {
        console.log(`${idx} : ${item.innerHTML}`);
        break;
    }
});