/*Add your JavaScript here*/
var cloeScore = 0;
var yasminScore = 0;

var result = document.getElementById("result");

var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", cloe);
q1a2.addEventListener("click", yasmin);

q2a1.addEventListener("click", cloe);
q2a2.addEventListener("click", yasmin);

q3a1.addEventListener("click", cloe);
q3a2.addEventListener("click", yasmin);

function cloe() {
  cloeScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "cloeScore = " + cloeScore);
}

function yasmin() {
  yasminScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "\t" + "yasminScore = " + yasminScore);
}

function cloe() {
  cloeScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "cloeScore = " + cloeScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function yasmin() {
  yasminScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "yasminScore = " + yasminScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}


function updateResult() {
    if (cloeScore >= 2) {
    result.innerHTML = "You are Cloe!";
    console.log("You are Cloe!");
  } else if (yasminScore >= 2) {
    result.innerHTML = "You are Yasmin!";
    console.log("You are Yasmin!");
  }
}




