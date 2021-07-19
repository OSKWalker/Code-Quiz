const scoreBarEl = document.getElementById("scoreBar");
const viewScoreButtonEl = document.getElementById("viewScoresButton");
const timerSpaceEl = document.getElementById("timerSpace");
const timerEl = document.getElementById("timer");
const quizAreaEl = document.getElementById("quizArea");
const resultsAreaEl = document.getElementById("resultsArea")
const startButtonEl = document.getElementById("startButton");
const scoreButtonEl = document.getElementById("scoreButton");
const submitButtonEl = document.getElementById("submitButton");
const quizQuestions = [
    
    {
        question: "Question 1?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "A"
    
    },

    {
        question: "Question 2?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "B"
    
    },

    {
        question: "Question 3?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "B"
    
    },

    {
        question: "Question 4?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "A"
    
    },

    {
        question: "Question 5?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "C"
    
    },

    {
        question: "Question 6?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "A"
    
    },

    {
        question: "Question 7?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "D"
    
    },

    {
        question: "Question 8?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "A"
    
    },

    {
        question: "Question 9?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "B"
    
    },

    {
        question: "Question 10?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "B"
    
    },

    {
        question: "Question 11?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "A"
    
    },

    {
        question: "Question 12?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "D"
    
    },

    {
        question: "Question 13?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "B"
    
    },

    {
        question: "Question 14?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "A"
    
    },

    {
        question: "Question 15?",
        
        answers: {
            
            A: "Answer A",
            B: "Answer B",
            C: "Answer C",
            D: "Answer D"
        },

        correctAnswer: "C"
    
    }

];


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
    gameOver.textContent = "GAME OVER!";
    gameOver.setAttribute("style", "font-weight: bold");
    quizAreaEl.appendChild(gameOver);
  
  }
// Function to initiate the quiz and start the timer
  function startQuiz(){

    secondsLeft = 5;

    countDown();

  }

// Function to view scores
function viewScores(){}

// Function to hide scores
function hideScores(){};

// Function to show scores
function showScores(){

    viewScores();
};

// Function to save scores
function saveScores(){

    hideScores();

};
/*
// Capture contents of localstorage

let savedScores = JSON.parse(localStorage.getItem("scoreHistory"));
if(savedScores == null)
{
    savedScores = [];
}

// Saves the Score

//save score when prompted
function saveScore(event){
    event.preventDefault();
    var userScore = {
        userInitial: document.querySelector("#user-initials").value.trim(),
        userScore: secondsLeft
    };
    savedScores.push(userScore);
    localStorage.setItem("scoreHistory",JSON.stringify(savedScores));
}*/

// Click event to view high scores
viewScoreButtonEl.addEventListener("click", viewScores);

// Click event to start the quiz
startButtonEl.addEventListener("click", startQuiz);

// Click event to show high scores and space to save initials and score
scoreButtonEl.addEventListener("click", showScores);

// Click event to save initials and score
submitButtonEl.addEventListener("click", saveScores);