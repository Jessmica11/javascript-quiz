var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#seconds-left");
var userChoice = document.querySelector(".btn");
var userScore = 0;

  // add event listener to the button
startButton.addEventListener('click', setTime);

var timeEl = document.querySelector("#seconds-left");
startButton.addEventListener("click", changeContent);
startButton.addEventListener("click", showQuiz);

var mainEl = document.getElementById("timer");

var secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";
    if(secondsLeft === 0) {
      // Stops execution once we hit zero
      clearInterval(timerInterval);
      // Change # seconds to a message
      timeEl.textContent = " You're out of time!";
      clearTimeout;
    }
  }, 1000);
}

  // Function to remove start button and replace with other text (to prevent user from clicking over and over)
  function changeContent() {
    startButton.innerHTML = "Answer the questions below";
  }

  // I want the quiz card to show when the user clicks the start button
  function showQuiz() {
    var quizCard = document.querySelector(".quiz");
    if (quizCard.style.display === "none") {
      quizCard.style.display = "block";
    } else{
      quizCard.style.display = "none";
  }
}

  // Q & A object with all possibilities
  var questionArea = document.getElementById("question");
  var answerArea = document.getElementById("answer-buttons");
  var current = 0;
  
  // An object that holds all the questions + possible answers.
  // In the array --> also provide correct answer
  const questions = [
     { question: "Which answer is a Javascript data type?", 
       choices: ["Loop", "Boolean", "Property", "Variable"],
       answer: 1
     },

    { question: "What is javascript used for?", 
      choices: ["Styling", "Structure", "User Interactivity", "Showing off"],
      answer: 2
    },
      
    { question: "What does DOM stand for?", 
      choices: ["Dog Operations Manager", "Document Object Model", "Do Ostriches Math?", "Don't Organize MyStuff"],
      answer: 1
    },
  ];

// need a function to actually get window ready for user's answers; start at zero for grade, etc
let currentQuestion = 0;
let correctAnswers = 0;

// show the questions from the object in the right place in the quiz <div>
function showQuestion() {
  const questionText = document.getElementById("question");
  questionText.textContent = questions[currentQuestion].question;

  const choices = document.querySelectorAll(".btn");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].answer) {
    feedback.textContent = "Correct!";
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrect!";
    secondsLeft--;
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz");
      quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
    }
  }, 2000);
}

showQuestion();