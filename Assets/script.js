var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('questionContainer')
var answerContainerEl = document.getElementById('answer-container')
var questionEl = document.getElementById('question')
var timerEl = document.getElementById('timerContainer')
var answerBtnEl = document.getElementsByClassName("answer-btn")



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

        if(secondsLeft === 0){
        clearInterval(timer);
        
        //finish game
        }
  }, 1000);
}

function highScore() {

}

function startGame() {
    // console.log('Started');
    startButton.classList.add("hide");
    shuffledQuestion = question.sort(() => Math.random() - .5)
    currentQuestionIndex= 0
    questionContainerEl.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        answerBtnEl.addEventListener("click", selectAnswer);
        answerContainerEl.appendChild(button);
      
    })
}

function selectAnswer() {
   if (question.answer === false){
       console.log("false")
       secondsLeft - 10;
   }
   currentQuestionIndex ++
   setNextQuestion()
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
    }
]