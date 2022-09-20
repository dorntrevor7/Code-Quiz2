// Selecting html elements
const $timer = document.querySelector("#timer");
const $question = document.querySelector("#question");
const $answer = document.querySelector("#answer");

// Creating an array of questions that will have the question and answer with the answer having a boolean isCorrect
const questions = [
  {
    question: "How do I log my work in the browser?",
    answers: [
      { answer: "console.log()", isCorrect: true },
      { answer: "alert()", isCorrect: false },
      { answer: "document.getElementById()", isCorrect: false },
      { answer: "browser.log()" },
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
      { answer: "browser.log()" },
    ],
  },
  {
    question: ["How many types of heading does an HTML contain?"],
    answers: [
      { answer: "console.log()", isCorrect: true },
      { answer: "alert()", isCorrect: false },
      { answer: "document.getElementById()", isCorrect: false },
      { answer: "browser.log()" },
    ],
  },
];
