//get inputEle
// const inputEle = document.getElementById("input-tag");
// let inputVal = inputEle.value;
// console.log(typeof inputVal);
let raceNumber;

//get output-ele
const outputEle = document.getElementById("output-ele");

//create random
// let raceNumber = Math.floor(Math.random() * 2000);
//get okBtn
const okBtn = document.getElementById("ok-btn");

//create pushBtn function
const pushBtn = okBtn.addEventListener("click", () => {
  //get value of inputEle
  const inputEle = document.getElementById("input-tag");
  const raceNumber = inputEle.value;

  console.log(typeof inputVal);
  console.log("clicked");
  console.log(raceNumber);

  //add outputValue to output-ele
  const addOutputVal = (raceNumber, startTime) => {
    let newText = document.createTextNode(
      `Your race number is ${raceNumber} and, start time is at ${startTime} `
    );
    outputEle.appendChild(newText, startTime);
  };

  if (1 <= raceNumber <= 1000) {
    //earlyAdult
    let startTime = "9:30";
    addOutputVal(raceNumber, startTime);
  } else if (2000 >= raceNumber >= 1000) {
    //lateAdult
    let startTime = "11:00";
    addOutputVal(raceNumber, startTime);
  } else {
    alert("This number is Invalid");
  }
});
