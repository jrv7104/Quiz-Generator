//Welcome to the coding quiz challenge message.//

//import questions from "./questions.js";//

console.log(questions); //export default [] with another javascript file//

const choices = document.querySelectorAll(".choices");
let questionIndex = 0;
const questionTitle = document.querySelector("#question-title");
let timeRemaining = 60;
const timeSpan =document.querySelector("#time");
const startBtn = document.querySelector("#start-button");
const timer = document.querySelector("#timer");
let intervalID = null;
var scoreUpdate = document.getElementById("score");
var score = 0;
var initials = document.getElementById("initials");

//const currentQuestion = document.querySelector("#current-question:");//
// let currentQuestion = 0;

const timeRemainingSpan = document.querySelector("span")

// function renderChoices(Choices, answers)

function scorePenalty () {
  if (choices === answer){
    score ++
  }
  else {
    timeRemaining - 10
  }
}

function showCurrentQuestion() {
  currentQuestion.innerHTML =   `
  <p>${questions[0].title}</p>
  `
}

function endGame() {
  /* (use commits)Toggle hidden/shown classes appropriately to show the ending screen
  Display remaining time as the score or tell user time is up
  Give a spot to enter Initials
  Listen for a submission on the form and add to local storage
  ask to play again*/
  //if (questionIndex > questions.length || timeRemaining <= 0)//{
    alert("Game complete!")
    var initials = prompt("Please enter initials for the leaderboard!")
    localStorage.setItem("entry", score);
    //document.getElementById("result").innerText = localStorage.getItem("entry");//
    console.log(localStorage.getItem("entry"))
    localStorage.setItem("name", initials)
    console.log(localStorage.getItem("name"))
    alert("Thanks for playing! Refresh page to play again!")
  //}
}

function showNextQuestion() {
  // questionIndex += 1;
  // if (questionIndex < questions.length) {
  //   questionTitle.innerText = "";
  //   choices.innerHTML = "";
  //   const currentQuestion = questions[questionIndex];
  //   questionTitle.innerText = currentQuestion.title;
  //   currentQuestion.choices.forEach((choice) => {
  //     const choiceBtn = document.createElement("button");
  //     choiceBtn.innerText = choice;
  //     if (currentQuestion.answer === choice) {
  //       choiceBtn.dataset.correct = "correct";
  //     }
  //     choices.appendChild(choiceBtn);
  //   });
  // } else {
  //   endGame();
  // }

  questionTitle.textContent = questions[questionIndex].title;

  choices.forEach((choice, i) => {
    choice.textContent = questions[questionIndex].choices[i]
    choice.addEventListener("click", answerHandle)
    //  (event) => {
      // feedback.classList.remove("hide");
      // if (!event.target.dataset.correct) {
      //   timeRemaining -= 10;
      //   feedback.innerText = "incorrect";
      // } else {
      //   feedback.innerText = "correct";
      // }
      // setTimeout(() => {
      //   feedback.classList.add("hide");
      //   showNextQuestion();
      // }, 600); 
    //   console.log('hello')
    // })
  })
}

function answerHandle () {
  var buttonText = this.textContent;
  var answer = questions[questionIndex].answer
  if (buttonText === answer) {
    score ++
    scoreUpdate.innerText = score
  }
  else {
    timeRemaining -= 10
  }
  questionIndex ++;
  if(questionIndex < questions.length){ 
    showNextQuestion()
  }
}

document.querySelector("span").innerText = timeRemaining;

function timerStarts(){
  let intervalID = setInterval(() => {
    timeRemaining -= 1;
    timeRemainingSpan.innerText = timeRemaining;
    
    if(timeRemaining <= 0 || questionIndex >= questions.length) {
      clearInterval(intervalID);
      endGame()
    }
}, 1000);
}

function startGame () {
  document.querySelector("#start-screen").classList.add("hide");
  document.querySelector("#questions").classList.remove("hide");
  timeRemaining = 60;
  timerStarts()
  showNextQuestion()
}

startBtn.addEventListener("click", startGame)

  /*timer.classList.add("is-visible");
  showCurrentQuestion();
};*/

// choices.addEventListener("click", (event) => {});
//Begin game when start gets clicked

//Count down timer when game starts

//Display score and high score

//Display question and four possible answers with one right answer. use <input type="radio" id="insert actual answer here" name="answer" value="answer">

//Have user select an answer and click submit

//If right, praise the user and add a point to the score

//If wrong, inform user and display correct answer and penalize by taking off seconds

//Have enough questions to prevent repeating questions in one game, possibly mix up location of answers

//When timer hits 0, display final score

//If final score is in top 10, congratulate user and display final placement

//If score in top 10, ask user to enter initials. When initials submitted, place user's initials and score in scoreboard

//Encourage user to beat their score.

//If not in top 10, thank user for playing and encourage user to try again for a high score.

//Have a prompt to play again

//Use a different set of questions every time a game begins.

//Have a function to clear high score board

//questions

// list of all questions, choices, and answers
/* var questions = [
    {
      title: "Which of the following is trivia comedy game?",
      choices: ["Minecraft", "Super Mario Brothers", "Fortnite", "You Don't Know Jack"],
      answer: "You Don't Know Jack"
    },
    {
      title: "What is the capital of Missouri?",
      choices: ["Jefferson City", "Springfield", "Kansas City", "St. Louis"],
      answer: "Jefferson City"
    },
    {
      title: "What is the dog's name in the Peanuts comic strip?",
      choices: [
        "Charlie Brown",
        "Pigpen",
        "Snoopy",
        "Lucy"
      ],
      answer: "Snoopy"
    },
    {
      title:
        "Which of these sports doesn't require a ball to play?",
      choices: ["Tennis", "Soccer", "Cricket", "Track and Field"],
      answer: "Track and Field"
    },
    {
      title:
        "Which of these superheroes is not part of the Marvel Cinematic Universe?",
      choices: ["Batman", "Iron Man", "Captain America", "Black Widow"],
      answer: "Batman"
    },
    {
      title:
        "How many MLB teams does Missouri have?",
        choices: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
      title:
        "Which of these gaming systems is made by Nintendo?",
        choices: ["XBox", "Switch", "Playstation", "Genesis"],
        answer: "Switch"
    },
    {
      title:
      "Which of these crime dramas airs on NBC?"
      choices: ["CSI", "Law and Order", "NYPD Blue", "NCIS"],
      answer: "Law and Order"
    },
    {
      title:
      "Which of these drinks have a clear, see-through color?",
      choices: ["Coffee", "Sprite", "Tea", "Orange Juice"],
      answer: "Sprite"
    },
    { title:
      "What movie format uses discs for playback?",
      choices: ["DVD/Blu-Ray", "Roku", "8mm", "VHS"],
      answer: "DVD/Blu-Ray"
    },
  ];*/