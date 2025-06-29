const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simplet Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyptertext Markup Language",
    b: "Hyptertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "Which year did JavaScript be released?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none",
    correct: "b",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const optionEls = document.querySelectorAll(".option");
const quizEl = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function deselectOptinos() {
  optionEls.forEach(function (optionEl) {
    optionEl.checked = false;
  });
}

function loadQuiz() {
  deselectOptinos();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let result = "";
  optionEls.forEach(function (optionEl) {
    if (optionEl.checked) {
      result = optionEl.id;
    }
  });
  return result; // retun can't be inside forEach loop
}

submitBtn.addEventListener("click", function () {
  const answer = getSelected();
  console.log("answer", answer);
  if (answer && answer == quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;
  console.log("score", score);
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quizEl.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
    <button onclick='location.reload()'>Reload</button>
    `;
  }
});
