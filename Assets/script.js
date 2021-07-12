var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('questionContainer')
var answerBtnEl = document.getElementById('answer-btn')
var questionEl = document.getElementById('question')
var timerEl = document.getElementById('timerContainer')



startButton.addEventListener('click', function() {
    startGame()
    countdown()
})

function countdown() {
timerEl.classList.remove("hide")
var secondsLeft = 100;
var timer= setInterval(function(){
        secondsLeft--;
        document.getElementById("timer").textContent= secondsLeft;

        if(secondsLeft === 0){
        clearInterval(timer);
        
        //finish game
        }
  }, 1000);
}



function startGame() {
    console.log('Started');
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
    questionEl.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerBtnEl.appendChild(button);
        
    })
}

function selectAnswer() {

}

var question = [
    {
        question: "What is 5+5?!",
        answer: [
            {text:"10", correct: true},
            {text:"25", correct: false },
            {text:"30", correct: false },
            {text:"40", correct: false }
        ]
    }
]