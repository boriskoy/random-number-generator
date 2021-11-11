let clickMe = document.getElementById('random-num-btn');

function getRandomNumber(min, max) {
  let totalEle = max - min + 1;
  let result = Math.floor(Math.random() * totalEle) + min;
  return result;
}
function createArrayOfNumber(start, end) {
  let myArray = [];
  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}
let numbersArray = createArrayOfNumber(1, 10000);

clickMe.addEventListener('click', () => {
  if (numbersArray.length === 0) {
    console.log('No more random number');
    return;
  }
  let randomIndex = getRandomNumber(0, numbersArray.length - 1);
  let randomNumber = numbersArray[randomIndex];
  numbersArray.splice(randomIndex, 1);
  document.getElementById('result').innerHTML = randomNumber;
  // console.log(randomNumber);
});
