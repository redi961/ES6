const show = () => {
  const radios = document.querySelector("#radioSection")
  const baseMent = document.querySelector("#ment")

  radios.style.display = 'none';
  baseMent.style.display = 'none';
  
  // 라디오버튼 밸류값 추출
  let r_value = document.querySelector('input[class="diceRadio"]:checked').value;
/*    for (let item of radios) {
    console.log(`radio2 : ${item.value}`);
    break;
  } */
  let tag = "";
  let tag2 = "";
  let ment = "";
  
  const imgs = document.querySelector("#diceSection")
  const ran = Math.floor (Math.random()*6)+1
   tag = tag + `<div class="divMsg"><img src="./image/${ran}.png" class = "msgImg"}"></div>` 
   imgs.innerHTML = tag 
   

    if (ran == r_value) {
      tag2 = tag2 + `<div class="divMsg"><img src="./image/o.png" class = "msgImg"}"></div>`
      ment = ment + `<h2> 성공!! </h2>`
      console.log ("일치");
    }else {
      tag2 = tag2 + `<div class="divMsg"><img src="./image/x.png" class = "msgImg"}"></div>`
      ment = ment + `<h2> 실패!! </h2>`
      console.log ("불일치");
     }
    
     imgs.innerHTML += tag2
     imgs.innerHTML += ment  

    console.log(ran);
    console.log(r_value);

}