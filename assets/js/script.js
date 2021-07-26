const scoreBarEl = document.getElementById("scoreBar");
const viewScoresButtonEl = document.getElementById("viewScoresButton");
const clearScoresButtonEl = document.getElementById("clearScoresButton");
const timerSpaceEl = document.getElementById("timerSpace");
const timerEl = document.getElementById("timer");
const quizTitleEl = document.getElementById("quizTitle");
const quizAreaEl = document.getElementById("quizArea");
const resultsAreaEl = document.getElementById("resultsArea");
const highScoresAreaEl = document.getElementById("highScoresArea");
const highScoresTableEl = document.getElementById("highScoresTable");
const tableBodyEl = document.getElementById("table-body");
const userInputEl = document.getElementById("userInitials");
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
      D: "Answer D",
    },

    correctAnswer: "Answer A",
  },

  {
    question: "Question 2?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer B",
  },

  {
    question: "Question 3?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer B",
  },

  {
    question: "Question 4?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer A",
  },

  {
    question: "Question 5?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer C",
  },

  {
    question: "Question 6?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer A",
  },

  {
    question: "Question 7?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer D",
  },

  {
    question: "Question 8?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer A",
  },

  {
    question: "Question 9?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer B",
  },

  {
    question: "Question 10?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer B",
  },

  {
    question: "Question 11?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer A",
  },

  {
    question: "Question 12?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer D",
  },

  {
    question: "Question 13?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer B",
  },

  {
    question: "Question 14?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer A",
  },

  {
    question: "Question 15?",

    answers: {
      A: "Answer A",
      B: "Answer B",
      C: "Answer C",
      D: "Answer D",
    },

    correctAnswer: "Answer C",
  },
];

let highScores = JSON.parse(localStorage.getItem("scoreHistory"));

let secondsLeft = 0;
let questionIndex = 0;
let answer = false;
let thisQuestion = "";
let theseAnswers = null;
let answerKey = [];

// Control the timer
function countDown() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.innerText = secondsLeft;

    if (secondsLeft <= 0) {
      // Calls function to create and append image
      endGame();
    }
  }, 1000);
}

// "GAME OVER!"
function endGame() {
  timerEl.textContent = "";
  clearInterval(timerInterval);
  quizAreaEl.innerHTML = "";
  var gameOver = document.createElement("h1");
  gameOver.textContent = "GAME OVER!";
  gameOver.setAttribute("style", "font-weight: bold");
  quizAreaEl.appendChild(gameOver);
  showScoreButton();
  return;
}

// Initiate the quiz and start the timer
function startQuiz() {
  hideStartButton();

  hideQuizTitle();

  hideViewScoresButton();

  hideHighScoresArea();

  showTime();

  secondsLeft = 45;

  showQuizArea();

  questionIndex = 0;

  getQuestion();

  countDown();
}

// Display the timer
function showTime() {
  timerSpaceEl.style.display = "initial";
}

// Hide the timer
function hideTime() {
  timerSpaceEl.style.display = "none";
}

// Display the high scores buttons
function showViewScoresButton() {
  viewScoresButtonEl.style.visibility = "visible";
  clearScoresButtonEl.style.visibility = "visible";
}

// Hide the high scores buttons
function hideViewScoresButton() {
  viewScoresButtonEl.style.visibility = "hidden";
  clearScoresButtonEl.style.visibility = "hidden";
}

// Display the quiz title
function showQuizTitle() {
  quizTitleEl.style.display = "initial";
}

// Hide the quiz title
function hideQuizTitle() {
  quizTitleEl.style.display = "none";
}

// Display quiz area
function showQuizArea() {
  quizAreaEl.style.display = "initial";
}

// Hide quiz area
function hideQuizArea() {
  quizAreaEl.style.display = "none";
}

// Display high scores area
function showHighScoresArea() {
  highScoresAreaEl.style.display = "initial";
}

// Hide high scores area
function hideHighScoresArea() {
  highScoresAreaEl.style.display = "none";
}

// Display the user input field
function showUserInput() {
  userInputEl.style.display = "initial";
}

// Hide the user input field
function hideUserInput() {
  userInputEl.style.display = "none";
}

// Display the start button
function showStartButton() {
  startButtonEl.style.display = "initial";
}

// Hide the start button
function hideStartButton() {
  startButtonEl.style.display = "none";
}

// Display the score button
function showScoreButton() {
  scoreButtonEl.style.display = "initial";
}

// Hide the score button
function hideScoreButton() {
  scoreButtonEl.style.display = "none";
}

//Display the submit button
function showSubmitButton() {
  submitButtonEl.style.display = "initial";
}

// Hide the submit button
function hideSubmitButton() {
  submitButtonEl.style.display = "none";
}

// Generate a question
function getQuestion() {
  // Clears the quiz space
  quizAreaEl.innerHTML = "";

  // Displays the question
  var questionSpace = document.createElement("h1");
  questionSpace.innerHTML = quizQuestions[questionIndex].question;
  quizAreaEl.appendChild(questionSpace);

  // Displays the answer choices
  theseAnswers = quizQuestions[questionIndex].answers;
  answerKey = Object.keys(theseAnswers);

  for (let i = 0; i < answerKey.length; i++) {
    let answerIndex = answerKey[i];
    var answerSpace = document.createElement("ul");
    var choice = document.createElement("li");
    var selection = document.createElement("button");
    selection.setAttribute("class", "button")

    selection.addEventListener("click", function (event) {
      event.preventDefault();

      event.stopPropagation();

      let selected = event.target;

      if (selected.matches("button") === true) {
        var userSelection = selected.innerText;

        checkAnswer(userSelection);
      } else {
        return;
      }
    });

    choice.innerText = answerIndex + ": ";
    selection.innerText = theseAnswers[answerIndex];
    choice.appendChild(selection);
    answerSpace.appendChild(choice);
    quizAreaEl.appendChild(answerSpace);
  }
}

// Check for correct answer; Take time if incorrect, Add time if correct
function checkAnswer(userSelection, selected) {
  var correct = quizQuestions[questionIndex].correctAnswer;
  var userAlert = document.createElement("h1");

  if (userSelection !== correct) {
    userAlert.textContent = "INCORRECT!";
    secondsLeft -= 4;
  } else {
    userAlert.textContent = "CORRECT!";
    secondsLeft += 2;
  }

  userAlert.setAttribute(
    "style",
    "font-size: 48px font-weight: bold font-style: italics transition: 0.25s"
  );

  resultsAreaEl.appendChild(userAlert);

  setTimeout(() => {
    while (resultsAreaEl.firstChild) {
      resultsAreaEl.removeChild(resultsAreaEl.firstChild);
    }
  }, 500);

  nextQuestion();
}

// Generates next question
function nextQuestion() {
  while (quizAreaEl.firstChild) {
    quizAreaEl.removeChild(quizAreaEl.firstChild);
  }

  questionIndex++;

  if (questionIndex >= quizQuestions.length || secondsLeft <= 0) {
    endGame();
  } else {
    getQuestion();
  }
}

// Toggle high score viewing
function viewScores() {
  if (highScoresAreaEl.style.display === "none") {
    hideQuizArea();
    hideQuizTitle();
    hideUserInput();
    showHighScoresArea();
  } else {
    hideHighScoresArea();
    showQuizTitle();
    showQuizArea();
  }

  if (highScores == null) {
    populateDefaultScores();
  } else {
    populateHighScores();
  }
}
// Fill the high scores table with defaults
function populateDefaultScores() {
  var arr = [
    { userInitials: "AAA", userScore: 48 },

    { userInitials: "MMM", userScore: 36 },

    { userInitials: "ZZZ", userScore: 24 },
  ];

  tableBodyEl.innerHTML = "";

  arr.forEach(function (score) {
    var tRow = document.createElement("tr");
    var tContent = `<td>${score.userInitials}</td><td>${score.userScore}</td>`;
    tRow.innerHTML = tContent;
    tableBodyEl.appendChild(tRow);
  });
}

// Fill the high scores table
function populateHighScores() {
  tableBodyEl.innerHTML = "";
  highScores.forEach(function (score) {
    var tRow = document.createElement("tr");
    var tContent = `<td>${score.userInitials}</td><td>${score.userScore}</td>`;
    tRow.innerHTML = tContent;
    tableBodyEl.appendChild(tRow);
  });
}

// Clear scores
function clearScores() {
  localStorage.clear();
  highScores = JSON.parse(localStorage.getItem("scoreHistory"));
}

// Display scorebar
function showScoreBar() {
  scoreBarEl.style.display = "initial";
}

// Hide scorebar
function hideScoreBar() {
  scoreBarEl.style.display = "none";
}

// Display scores and prompt for initials
function showScores() {
  hideTime();

  hideScoreButton();

  hideQuizArea();

  showHighScoresArea();

  var scoreText = document.createElement("h1");
  scoreText.innerText = "YOUR SCORE IS: " + secondsLeft + "!";
  scoreText.setAttribute("style", "font-weight: bold");
  resultsAreaEl.appendChild(scoreText);

  tableBodyEl.innerHTML = "";

  if (highScores == null) {
    highScores = [];
  };

  highScores.forEach(function (score) {
    var tRow = document.createElement("tr");
    var tContent = `<td>${score.userInitials}</td><td>${score.userScore}</td>`;
    tRow.innerHTML = tContent;
    tableBodyEl.appendChild(tRow);
  });

  showUserInput();

  //highScoresTableEl

  showSubmitButton();
}

// Save scores to local storage
function saveScores(event) {
  event.preventDefault();
  let userScore = {
    userInitials: document.getElementById("userInitials").value.trim(),
    userScore: secondsLeft
  };


  highScores.push(userScore);
  localStorage.setItem("scoreHistory", JSON.stringify(highScores));

  transitionToStart();
}

// Transitions back to intial stage of quiz
function transitionToStart() {
  populateHighScores();
  while (resultsAreaEl.firstChild) {
    resultsAreaEl.removeChild(resultsAreaEl.firstChild);
  };
  hideUserInput();
  hideSubmitButton();
  setTimeout(() => {
    hideHighScoresArea();
    init();
  }, 3000);
}
// Adds requisite event listeners
function setEventListeners() {
  // Click event to view high scores
  viewScoresButtonEl.addEventListener("click", viewScores);

  // Click event to clear high scores
  clearScoresButtonEl.addEventListener("click", clearScores);

  // Click event to start the quiz
  startButtonEl.addEventListener("click", startQuiz);

  // Click event to show high scores and space to save initials and score
  scoreButtonEl.addEventListener("click", showScores);

  // Click event to save initials and score
  submitButtonEl.addEventListener("click", saveScores);
}

// Initializing function
function init() {
  showScoreBar();

  showViewScoresButton();

  hideTime();

  showQuizTitle();

  showQuizArea();

  hideHighScoresArea();

  showStartButton();

  hideScoreButton();

  hideSubmitButton();

  setEventListeners();

  quizTitleEl.textContent = "Code Quiz Challenge";
  quizAreaEl.textContent =
    "ARE YOU READY TO TEST YOUR KNOWLEDGE OF GENERAL CODING TRIVIA?";
}

// Execute the initializing function
init();
