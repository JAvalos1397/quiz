var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('questionContainer')
var shuffledQuestion, currentQuestionIndex
var answerBtnEl = document.getElementById('answer-btn')
var timerEl = document.getElementById('timerContainer')
let questionEl = document.getElementById('question')


startButton.addEventListener('click', function() {
    startGame()
    countdown()
})

function countdown() {

var sec = 100;
var timer= setInterval(function(){
    document.getElementById(timer).innerHTML="0"
})
}

function startGame() {
    console.log('Started');
    startButton.classList.add("hide");
    shuffledQuestion = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
}

function selectAnswer() {


}
//https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified
var question = [
    {
        question: "What is 5+5?",
        Answer: [
            {text:"10", correct: true},
            {text:"25", correct: false },
            {text:"30", correct: false },
            {text:"40", correct: false }
        ]
    }
]