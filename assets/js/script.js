var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start");
var quizAreaEl = document.getElementById("quizArea");

let secondsLeft = 0;

function countDown() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);

        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

  // Function to create and append "GAME OVER! message"
function sendMessage() {
    timerEl.textContent = "";
    var gameOver = document.createElement("h1");
    gameOver.setAttribute("style", "font-weight: bold");
    quizAreaEl.appendChild(gameOver);
  
  }
// Function to initiate the quiz and start the timer
  function startQuiz(){

    secondsLeft = 5;

    countDown();

  }

  startEl.addEventListener("click", startQuiz);