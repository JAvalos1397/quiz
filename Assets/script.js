var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('questionContainer')
var answerContainerEl = document.getElementById('answer-container')
var questionEl = document.getElementById('question')
var timerEl = document.getElementById('timerContainer')
var answerBtnEl = document.getElementsByClassName("answer-btn")
var endGameContainerEl = document.getElementById('endGame')
var quizContainerEl = document.getElementById("quiz")

// var form = 
// var initial = document.getElementById('initialText');
var highScore = [];

startButton.addEventListener('click', function() {
    startGame();
    countdown();
})

// This is the next button use this to go to the next answer


//This timer will count down when the game starts 
function countdown() {
timerEl.classList.remove("hide")
var secondsLeft = 100;

var timer = setInterval(function(){
        secondsLeft--;
        document.getElementById("timer").textContent= secondsLeft;

        if(question.length == currentQuestionIndex + 1){
            clearInterval(timer);
            highScore.push(secondsLeft);
            console.log(secondsLeft);
            localStorage.setItem("highScore", JSON.stringify(highScore))
            
        } else if(secondsLeft === 0 ){
        clearInterval(timer);
        highScore.push(secondsLeft);
        localStorage.setItem("highScore", JSON.stringify(highScore))      
        }
        
  }, 1000);
}

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestion = question.sort(() => Math.random() - .5); //shuffle my question
    currentQuestionIndex= 0; // sets the first question
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetAnswer() 
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        button.addEventListener("click", function(){
            console.log("clicked",answer.correct)
            selectAnswer()
        });
        answerContainerEl.appendChild(button);
          })
}


function selectAnswer() {   
   if (question.length <= currentQuestionIndex + 1 ) {
    console.log("end game")
    endGame()
 
} else {
   currentQuestionIndex ++
   setNextQuestion()
    }
}

//fixes bug where old answer button stayed on screen
function resetAnswer(){
    while (answerContainerEl.firstChild) {
        answerContainerEl.removeChild(answerContainerEl.firstChild)
    }
}

//game Ender supposed to save time > then unhide End game card
function endGame() {
    // questionContainerEl.classList.add("hide");
    quizContainerEl.classList.add("hide");
    endGameContainerEl.classList.remove('hide');

}

document.getElementById('initialForm').addEventListener("submit", function(event){
    event.preventDefault();
    saveScore();
    renderScore();
    document.getElementById('initialForm').classList.add('hide')
})

function saveScore() {
    var score = {
        time: highScore,
        name: document.getElementById('initialText').value,
    }
    localStorage.setItem("score", JSON.stringify(score));
}

function renderScore() {

    var ScoreRender = JSON.parse(localStorage.getItem("score"));
    if (ScoreRender !== null) {
        document.getElementById("initial").innerHTML = ScoreRender.name; 
        document.getElementById("score").innerHTML = ScoreRender.time;
        
      } else {
        return;
      }
    }

var question = [
    {
        question: "What is 5+5?!",
        answer: [
            {text:"10", correct: true},
            {text:"225", correct: false },
            {text:"305", correct: false },
            {text:"430", correct: false }
        ]
    },
    {
        question: "What is 5+20?!",
        answer: [
            {text:"510", correct: false},
            {text:"25", correct: true },
            {text:"340", correct: false },
            {text:"450", correct: false }
        ]
    },
    {
        question: "What is 10+20?!",
        answer: [
            {text:"10", correct: false},
            {text:"245", correct: false },
            {text:"350", correct: true },
            {text:"410", correct: false }
        ]
    },
    {
        question: "What is 10+20?!",
        answer: [
            {text:"10", correct: false},
            {text:"245", correct: false },
            {text:"350", correct: true },
            {text:"410", correct: false }
        ]
    },
    // {
    //     question: "What is 10+20?!",
    //     answer: [
    //         {text:"10", correct: false},
    //         {text:"245", correct: false },
    //         {text:"350", correct: true },
    //         {text:"410", correct: false }
    //     ]
    // },
    // {
    //     question: "What is 10+20?!",
    //     answer: [
    //         {text:"10", correct: false},
    //         {text:"245", correct: false },
    //         {text:"350", correct: true },
    //         {text:"410", correct: false }
    //     ]
    // },
    // {
    //     question: "What is 10+20?!",
    //     answer: [
    //         {text:"10", correct: false},
    //         {text:"245", correct: false },
    //         {text:"350", correct: true },
    //         {text:"410", correct: false }
    //     ]
    // },
    // {
    //     question: "What is 10+20?!",
    //     answer: [
    //         {text:"10", correct: false},
    //         {text:"245", correct: false },
    //         {text:"350", correct: true },
    //         {text:"410", correct: false }
    //     ]
    // },
    // {
    //     question: "What is 10+20?!",
    //     answer: [
    //         {text:"10", correct: false},
    //         {text:"245", correct: false },
    //         {text:"350", correct: true },
    //         {text:"410", correct: false }
    //     ]
    // },
    // {
    //     question: "What is 10+20?!",
    //     answer: [
    //         {text:"10", correct: false},
    //         {text:"245", correct: false },
    //         {text:"350", correct: true },
    //         {text:"410", correct: false }
    //     ]
    // },
]


