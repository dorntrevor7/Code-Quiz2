// Selecting html elements
const $timer = $("#timer");
const $question = $("#question");
const $answer = $("#answers");
const $start = $("#start");

// Creating an array of questions that will have the question and answer with the answer having a boolean isCorrect
const questions = [
  {
    question: "How do I log my work in the browser?",
    answers: [
      { answer: "console.log()", isCorrect: true },
      { answer: "alert()", isCorrect: false },
      { answer: "document.getElementById()", isCorrect: false },
      { answer: "browser.log()", isCorrect: false },
    ],
  },
  {
    question: "What are Tags?",
    answers: [
      { answer: "console.log()", isCorrect: true },
      { answer: "alert()", isCorrect: false },
      { answer: "document.getElementById()", isCorrect: false },
      { answer: "browser.log()" },
    ],
  },
  {
    question: ["Do all HTML tags have an end tag?"],
    answers: [
      { answer: "console.log()", isCorrect: true },
      { answer: "alert()", isCorrect: false },
      { answer: "document.getElementById()", isCorrect: false },
      { answer: "browser.log()", isCorrect: false },
    ],
  },
  {
    question: ["How many types of heading does an HTML contain?"],
    answers: [
      { answer: "console.log()", isCorrect: true },
      { answer: "alert()", isCorrect: false },
      { answer: "document.getElementById()", isCorrect: false },
      { answer: "browser.log()", isCorrect: false },
    ],
  },
];

function startQuiz() {
  // setInterval(function, 1000);
  //   create buttons that show up on html with the answer content

  //  Creating the li buttons
  const $button = $("<button>");
  const $li = $("<li>");
  $question.text(questions[0].question);
  $li.text(questions[0].answers[0].answer);
  $answer.append($li);
}

$start.on("click", startQuiz);
