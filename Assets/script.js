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

startButton.addEventListener('click', function () {
    startGame();
    countdown();
})

//This timer will count down when the game starts 
var secondsLeft = 100;

function countdown() {
    timerEl.classList.remove("hide")
    var timer = setInterval(function () {
        secondsLeft--;
        document.getElementById("timer").textContent = secondsLeft;

        if (question.length == currentQuestionIndex + 1) {
            clearInterval(timer);
            highScore.push(secondsLeft);
            // console.log(secondsLeft);
            localStorage.setItem("highScore", JSON.stringify(highScore))

        } else if (secondsLeft <= 0) {
            clearInterval(timer);
            highScore.push(secondsLeft);
            localStorage.setItem("highScore", JSON.stringify(highScore))
        }

    }, 1000);
}

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestion = question.sort(() => Math.random() - .5); //shuffle my question
    currentQuestionIndex = 0; // sets the first question
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
        button.addEventListener("click", function () {
            if (answer.correct === false) {
                // console.log(secondsLeft)
                secondsLeft = secondsLeft - 20;                
            }
            selectAnswer()
        });
        answerContainerEl.appendChild(button);
    })
}


function selectAnswer() {
    if (question.length <= currentQuestionIndex + 1) {
        // console.log("end game")
        endGame()

    } else {
        currentQuestionIndex++
        setNextQuestion()
    }
}

//fixes bug where old answer button stayed on screen
function resetAnswer() {
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

document.getElementById('initialForm').addEventListener("submit", function (event) {
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
        question: "What was the first Pixar film to be made?",
        answer: [
            { text: "Toy Story", correct: true },
            { text: "Monster, Inc", correct: false },
            { text: "Finding Nemo", correct: false },
            { text: "Cars", correct: false }
        ]
    },
    {
        question: "What is the name of the girl in Inside Out?",
        answer: [
            { text: "Boo", correct: false },
            { text: "Riley", correct: true },
            { text: "Dot", correct: false },
            { text: "Colette", correct: false }
        ]
    },
    {
        question: "What is the name of this menacing shark in Finding Nemo?",
        answer: [
            { text: "Bob", correct: false },
            { text: "Roger", correct: false },
            { text: "Bruce", correct: true },
            { text: "Kevin", correct: false }
        ]
    },
    {
        question: "What is the name of The Incredibles' main enemy?",
        answer: [
            { text: "bomb voyage", correct: false },
            { text: "Mezmerella ", correct: false },
            { text: "The Underminer", correct: false },
            { text: "Syndrome", correct: true }
        ]
    },
    {
        question: "Horst, from Ratatouille, claims to have killed man with what?",
        answer: [
            {text:"Thumb", correct: true},
            {text:"Knife", correct: false },
            {text:"Food Poison", correct: false },
            {text:"Boredom", correct: false }
        ]
    },
    {
        question: "Brave is set in which country?",
        answer: [
            {text:"England", correct: false},
            {text:"Scotland", correct: true },
            {text:"Tatooine", correct: false },
            {text:"Wales", correct: false }
        ]
    },
    {
        question: "In Coco, what song did Miguel use to Compete",
        answer: [
            {text:"Remember me", correct: false},
            {text:"La Llorona", correct: false },
            {text:"Un Poco Loco", correct: true },
            {text:"Proud Corazon", correct: false }
        ]
    },
    {
        question: "Which of these emotions is not a character in Pixar’s Inside Out?",
        answer: [
            {text:"Sadness", correct: false},
            {text:"Joy", correct: false },
            {text:"Anger", correct: false },
            {text:"Surprise", correct: true }
        ]
    },
    {
        question: "This Toy Story actor has provided vocal work in all of Pixar's feature films:",
        answer: [
            {text:"John Ratzenberger", correct: true},
            {text:"Wallace Shawn", correct: false },
            {text:"Tim Allen", correct: false },
            {text:"Tom Hanks", correct: false }
        ]
    },
    {
        question: "Which movie musical is robot WALL-E fond of watching in WALL-E?",
        answer: [
            {text:"Grease", correct: false},
            {text:"Funny Girl", correct: false },
            {text:"Hello, Dolly!", correct: true },
            {text:"Mary Poppins", correct: false }
        ]
    },
]


