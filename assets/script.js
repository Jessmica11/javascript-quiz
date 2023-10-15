var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#seconds-left");
var userChoice = document.querySelector(".option-button");
var userScore = 0;

  // add event listener to the button
startButton.addEventListener('click', setTime);

var timeEl = document.querySelector("#seconds-left");
startButton.addEventListener('click', changeContent);

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

// Function to remove start button and replace with other text
  function changeContent() {
    startButton.innerHTML = "Answer the questions below";
  }

  // Q & A object with all possibilities

function startQuiz () {
  
  var questionArea = document.querySelector(".question-area");
  var answerArea = document.querySelector("#answer-area");
  var current = 0;
  
     // An object that holds all the questions + possible answers.
     // In the array --> also provide correct answer
      var quizQuestions = [
        { prompt: "Which answer is a Javascript data type?", 
          answers: [
            {text: "Loop", confirm: false},
            {text: "Boolean", confirm: true},
            {text: "Property", confirm: false},
            {text: "Variable", confirm: false},]
        },

        { prompt: "What is javascript used for?", 
          answers: [
            {text: "Styling", confirm: false},
            {text: "Structure", confirm: false},
            {text: "User Interactivity", confirm: true},
            {text: "Showing off", confirm: false},]
        },
      
        { prompt: "Do we still use Javascript on modern pages today?", 
          answers: [
            {text: "Yes!", confirm: true},
            {text: "Nah, not really", confirm: false},]
        },
      ]
      };


     

