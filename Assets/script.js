var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var shuffledQuestion, currentQuestionIndex
var answerBtnEl = document.getElementById('answer-btn')

let questionEl = document.getElementById('question')


startButton.addEventListener('click', function() {
    startGame()
})

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestion = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
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

var question = [
    {
        question: "What is 5+5?",
        Answer: [
            {text:"10", correct: true},
            {text:"22", correct: false }
        ]
    }
]