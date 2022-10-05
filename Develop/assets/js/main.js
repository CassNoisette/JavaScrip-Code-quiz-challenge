// starting point for this commentary,

console.log("Sam, your questions");

const startButton = document.getElementById('start-button')
// const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons');
const clock = document.getElementById('clock')

let currentQuestion = 0;
let time = 99;
let timer;


  // create the question elements
var questions = [
  {
    questionTitle: "Commonly used data types DO NOT include:",
    options: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
    answer: "3.alerts",

  },
  {
    questionTitle: "Commonly the condition is an if / else statement is enclosed within",
    options: ["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"],
    answer: "3.parentheses",

  },

  {
    questionTitle: "Arrays in JavaScript can be used to store _____",
    options: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
    answer: "4.all of the above",

  },

  {
    questionTitle: "String values must be enclosed within ______ when being assigned to variables.",
    options: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"],
    answer: "3.quotes",

  },

  {
    questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is",
    options: ["1.Javascript" , " 2.terminal / bash" , "3.for loops", "4.console.log"],
    answer: "4.console.log",

  },

]


startButton.addEventListener('click', startGame)


function startGame() {
  console.log('Start game')
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  startTimer()
  setNextQuestion()
}

function setNextQuestion() {
  questionElement.textContent = questions[currentQuestion].questionTitle
  answerButtonsElement.textContent = ""

  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    let answerButton = document.createElement("button");
    answerButton.setAttribute("class", "button");
    answerButton.addEventListener('click', selectAnswer);
    answerButton.setAttribute("data-value", questions[currentQuestion].options[i]);
    answerButton.textContent = questions[currentQuestion].options[i];
    answerButtonsElement.appendChild(answerButton)

  }
}


function startTimer() {
  timer = setInterval(function () {
    time--
    clock.textContent = time;

  }, 1000)
}


function selectAnswer() {
  console.log(this.dataset.value)
  if (this.dataset.value === questions[currentQuestion].answer){
    currentQuestion++
    setNextQuestion()

  }

  if (this.dataset.value !== questions[currentQuestion].answer){
  time = time - 10
  }

  if (time < 0) {
  time = 0; 
  }

  clock.textContent = time;

  if (currentQuestion === questions.length) {
    quizEnd();
  } else {
    setNextQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(clock);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsElement.setAttribute("class", "hide");
}






  






  // modify the text/attributes
  // modify one of the attributes to say right or wrong

  // append all elements to something on the page

  // for all the s, add event listener

  // WHEN I answer a question
  // if answered correctly
  // add points
  // show as correct
  // WHEN I answer a question incorrectly
  // THEN time is subtracted from the clock
  // show as incorrect

  // after the answer,
  // THEN I am presented with another question
  // need a function call to present the question

  // if no other questions,
  // go to highscore screen



// eventListener here // when i click the start 

