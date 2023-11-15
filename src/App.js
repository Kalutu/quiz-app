import questions from "./questions"

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle answer choices and correct answers for each question
questions.forEach((question) => {
    shuffle(question.choices);

    // Find the index of the correct answer
    const correctAnswerIndex = question.choices.findIndex((choice) => choice.answer === true);

    // Swap the correct answer with a randomly chosen answer
    const randomIndex = Math.floor(Math.random() * question.choices.length);
    [question.choices[correctAnswerIndex], question.choices[randomIndex]] = [question.choices[randomIndex], question.choices[correctAnswerIndex]];
});


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHtmL="Next";
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber= currentQuestionIndex+1;
    questionElement.innerHTML= questionNumber + "." + currentQuestion.question;

    currentQuestion.choices.forEach(choice=>{
         const button = document.createElement("button");
         button.innerHTML = choice.text;
         button.classList.add("btn");
         answerButtons.appendChild(button);
         if(choice.answer){
            button.dataset.answer = choice.answer;
         }
         button.addEventListener("click", selectChoice)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectChoice(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.answer === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.answer === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz();
    }
})
startQuiz();

export default function App(){
    return(      
        <div class="app">
            <h1>Simple Quiz</h1>
            <div class="quiz">
                <h2 id="question">Question goes here</h2>
                <div id="answer-buttons">
                    <button class="btn">Answer 1</button>
                    <button class="btn">Answer 2</button>
                    <button class="btn">Answer 3</button>
                    <button class="btn">Answer 4</button>
                </div>
                <button id="next-button">Next</button>
            </div>
        </div>
    )
}
