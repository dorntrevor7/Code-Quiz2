// Selecting html elements
const $timer = $("#timer");
const $question = $("#question");
const $answer = $("#answers");
const $start = $("#start");
const elementAns = $("#Elements");
const $correct = $("#correct");
const $incorrect = $("#incorrect");
const btn0 = $("#0");
const btn1 = $("#1");
const btn2 = $("#2");
const btn3 = $("#3");

// hide correct and incorrect elements
$correct.hide();
$incorrect.hide();

let question = "";
// "What are Tags?",
// "Do all HTML tags have an end tag?",
// "How many types of heading does an HTML contain?",

// function that start timer
let count = 70;
function startTimer() {
  count--;
  $timer.text(count);
  if (count < 1) {
    clearInterval();
    gameOver();
  }
}

function startQuiz() {
  $(".card-body h3").hide();
  $start.hide();
  // Creating an array of questions that will have the question and answer with the answer having a boolean isCorrect

  let answers = [
    { answer: "Elements", boolean: true },
    { answer: "Classes", boolean: false },
    { answer: "IDs", boolean: false },
    { answer: "Scripts", boolean: false },
  ];
  // starts the timer
  setInterval(startTimer, 1000);

  $question.text("What are tags in HTML called?");
  answers.forEach(function (answer, index) {
    const btn = $("<button>");
    btn.text(answer.answer);
    btn.attr("boolean", answer.boolean);
    btn.attr("id", index);
    btn.attr("style", "padding: 10px; margin: 10px;");
    $answer.append(btn);
  });
  $("button").on("click", function () {
    const element = $(this);
    console.log(element.attr("boolean"));
    if (element.attr("boolean") === "true") {
      $correct.show();
      const time = setInterval(() => {
        $correct.hide();
        clearInterval(time);
      }, 2000);
      secondQuestion();
      return;
    } else {
      count = count - 5;
      $incorrect.show();
      let time = setInterval(() => {
        $incorrect.hide();
        clearInterval(time);
      }, 2000);
    }
  });
  // $("#Elements").on("click", function () {});
  // $("#").on("click", function () {});
  // $("#2").on("click", function () {
  //   count = count - 5;
  //   $incorrect.show();
  //   let time = setInterval(() => {
  //     $incorrect.hide();
  //     clearInterval(time);
  //   }, 3000);
  // });
  // $("#3").on("click", function () {
  //   count = count - 5;
  //   $incorrect.show();
  //   let time = setInterval(() => {
  //     $incorrect.hide();
  //     clearInterval(time);
  //   }, 3000);
  // });
}

// when start quiz is clicked the timer start
$start.on("click", startQuiz);
// runs the next question and answers when the user chooses correctly
function secondQuestion() {
  $question.text("What is the selector in CSS for classes?");
  answers = [
    { answer: "Hashtag", boolean: false },
    { answer: "Period", boolean: true },
    { answer: "Greater Than Symbol", boolean: false },
    { answer: "Less Than Symbol", boolean: false },
  ];
  console.log("this is " + btn0);
  $("#0").text(answers[0].answer);
  $("#1").text(answers[1].answer);
  $("#2").text(answers[2].answer);
  $("#3").text(answers[3].answer);
  $("#0").attr("boolean", answers[0].boolean);
  $("#1").attr("boolean", answers[1].boolean);
  $("#2").attr("boolean", answers[2].boolean);
  $("#3").attr("boolean", answers[3].boolean);
  $("button").on("click", function () {
    const element = $(this);
    console.log(element.attr("boolean"));
    if (element.attr("boolean") === "true") {
      $correct.show();
      const time = setInterval(() => {
        $correct.hide();
        clearInterval(time);
      }, 2000);
      thirdQuestion();
      return;
    } else {
      count = count - 5;
      $incorrect.show();
      let time = setInterval(() => {
        $incorrect.hide();
        clearInterval(time);
      }, 2000);
    }
  });
}

function thirdQuestion() {
  $question.text("What is the p tag used for?");
  answers = [
    { answer: "Headings", boolean: false },
    { answer: "Buttons", boolean: false },
    { answer: "Linking Html files", boolean: false },
    { answer: "A paragraph text", boolean: true },
  ];
  console.log("this is " + btn0);
  $("#0").text(answers[0].answer);
  $("#1").text(answers[1].answer);
  $("#2").text(answers[2].answer);
  $("#3").text(answers[3].answer);
  $("#0").attr("boolean", answers[0].boolean);
  $("#1").attr("boolean", answers[1].boolean);
  $("#2").attr("boolean", answers[2].boolean);
  $("#3").attr("boolean", answers[3].boolean);
  $("button").on("click", function () {
    const element = $(this);
    if (element.attr("boolean") === "true") {
      $correct.show();
      let time = setInterval(() => {
        $correct.hide();
        clearInterval(time);
      }, 2000);
      fourthQuestion();
      return;
    } else {
      count = count - 5;
      $incorrect.show();
      let time = setInterval(() => {
        $incorrect.hide();
        clearInterval(time);
      }, 2000);
    }
  });
}

function fourthQuestion() {
  $question.text("How do I select a p element in JS");
  answers = [
    { answer: `document.querySelector("p")`, boolean: true },
    { answer: `document.select("p")`, boolean: false },
    { answer: `document.getElementById("p")`, boolean: false },
    { answer: `document.getElementByClassName("p")`, boolean: false },
  ];
  console.log("this is " + btn0);
  $("#0").text(answers[0].answer);
  $("#1").text(answers[1].answer);
  $("#2").text(answers[2].answer);
  $("#3").text(answers[3].answer);
  $("#0").attr("boolean", answers[0].boolean);
  $("#1").attr("boolean", answers[1].boolean);
  $("#2").attr("boolean", answers[2].boolean);
  $("#3").attr("boolean", answers[3].boolean);
  $("button").on("click", function () {
    const element = $(this);
    console.log(element.attr("boolean"));
    if (element.attr("boolean") === "true") {
      $correct.show();
      let time = setInterval(() => {
        $correct.hide();
        clearInterval(time);
      }, 2000);
      showResults();
    } else {
      count = count - 5;
      $incorrect.show();
      let time = setInterval(() => {
        $incorrect.hide();
        clearInterval(time);
      }, 2000);
    }
  });
}

function gameOver() {
  location.replace("./assets/html/results.html");
}
