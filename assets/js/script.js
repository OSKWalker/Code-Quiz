const scoreBarEl = document.getElementById("scoreBar");
const viewScoreButtonEl = document.getElementById("viewScoresButton");
const timerSpaceEl = document.getElementById("timerSpace");
const timerEl = document.getElementById("timer");
const quizTitleEl = document.getElementById("quizTitle");
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

let highScores = [];
let secondsLeft = 0;
let questionCounter = 0;
let answer = false;
let thisQuestion = "";
let theseAnswers = null;
let answerKey = [];

function countDown() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.innerText = secondsLeft;
  
      if(secondsLeft === 0) {

        // Stops execution of action at set interval
        clearInterval(timerInterval);

        // Calls function to create and append image
        endGame();
      }
  
    }, 1000);
  }

  // Function to create and append "GAME OVER! message"
function endGame() {
    timerEl.textContent = "";
    var gameOver = document.createElement("h1");
    gameOver.textContent = "GAME OVER!";
    gameOver.setAttribute("style", "font-weight: bold");
    quizAreaEl.appendChild(gameOver);
    showScoreButton();
    return;
  
  }
// Function to initiate the quiz and start the timer
function startQuiz(){
    
    hideStartButton();
    hideQuizTitle();
    viewScoreBar();
    secondsLeft = 5;
    countDown();
    questionCounter = 0;        
    getQuestion();    

}

function showTime(){

    timerSpaceEl.style.display = "initial";

};

function hideTime(){

    timerSpaceEl.style.display = "none";
    
};

function showQuizTitle(){

    quizTitleEl.style.display = "initial";

};

function hideQuizTitle(){

    quizTitleEl.style.display = "none";

};

function showStartButton(){

    startButtonEl.style.display = "initial";

};

function hideStartButton(){

    startButtonEl.style.display = "none";
    
};

function showScoreButton(){

    scoreButtonEl.style.display = "initial";

};

function hideScoreButton(){

    scoreButtonEl.style.display = "none";
    
};

function showSubmitButton(){

    submitButtonEl.style.display = "initial";

};

function hideSubmitButton(){

    submitButtonEl.style.display = "none";
    
};

function getQuestion(){

    quizAreaEl.innerHTML = "";

    if(questionCounter>=quizQuestions.length){

        endGame();
    
    };

    const questionIndex = questionCounter;
    var questionSpace = document.createElement("h1");
    questionSpace.innerHTML = quizQuestions[questionIndex].question;
    quizAreaEl.appendChild(questionSpace);
    theseAnswers = quizQuestions[questionIndex].answers;

    answerKey = Object.keys(theseAnswers);
    console.log(answerKey);
    
    for(let i=0; i < answerKey.length; i++){
        
        let answerIndex = answerKey[i];
        var answerSpace = document.createElement("ul");
        var choice = document.createElement("li");
        choice.innerText = theseAnswers[answerIndex];
        answerSpace.appendChild(choice);
        quizAreaEl.appendChild(answerSpace);
    };    
    
    



    questionCounter++;

    
        
    
        

    





};

// Toggle high score viewing
function viewScores(){};

// Function to view scorebar
function viewScoreBar(){

    scoreBarEl.style.display = "initial";

};

// Function to hide scorebar
function hideScoreBar(){  
    
    scoreBarEl.style.display = "none";

};

// Function to show scores
function showScores(){

    hideScoreBar();

    hideScoreButton();

    showSubmitButton();

};

// Function to save scores
function saveScores(){

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
    localStorage.setItem("scoreHistory", JSON.stringify(savedScores));
}*/

    init();

};

// Adds requisite event listeners
function setEventListeners(){

// Click event to view high scores
viewScoreButtonEl.addEventListener("click", viewScores);

// Click event to start the quiz
startButtonEl.addEventListener("click", startQuiz);

// Click event to show high scores and space to save initials and score
scoreButtonEl.addEventListener("click", showScores);

// Click event to save initials and score
submitButtonEl.addEventListener("click", saveScores);

};

// Initializing function
function init(){

    if(highScores===[]){
        
        hideTime();

    }else{
        
        hideScoreBar();

    }

    showQuizTitle();

    showStartButton();
    
    hideScoreButton();

    hideSubmitButton();

    setEventListeners();

    quizAreaEl.textContent = "ARE YOU READY TO TEST YOUR KNOWLEDGE OF GENERAL CODING TRIVIA?"

};

// Execute the initializing function
init();