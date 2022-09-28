function getRandomInt(min, max) {
  //Ceil -> 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
  min = Math.ceil(min);
  //Floor -> 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const show = () => {
  const radios = document.querySelector("#msg")
  radios.style.display = 'none';
}