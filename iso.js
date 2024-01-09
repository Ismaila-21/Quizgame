const questions = [
    {
        question: "Qui peut vous donner cours le soire et ne vient pas?",
        options: ["Mr.Baldé", "Mr.Mané", "Mr.Keita", "Mr.Sylla"],
        correctAnswer: "Mr.Sylla"
    },
    {
        question: "Quelle est la personne que les éléves deteste le plus a l'école?",
        options: ["Mr.Abdoul", "Mr.seck", "Mr.Siby", "Senor"],
        correctAnswer: "Senior"
    },
    {
        question: "Qui aime te conseiller et aprés te critiquer?",
        options: ["Mr.Sarr", "Mr.Bop", "Mr.Diallo", "Mr.Siby"],
        correctAnswer: "Mr.Siby"
    },
    {
        question: "Qui a dit a ses éléves que << le soleil se léve en ouvrant ses bras?",
        options: ["Mr.Sarr", "Mr.Fall", "Mr.Diallo", "Mr.Cissé"],
        correctAnswer: "Mr.Siby"
    },
    {
        question: "Qui on appelle Al Fondo?",
        options: ["Mr.Sarr", "Mr.Bop", "Sn.Cissé", "Mr.Siby"],
        correctAnswer: "Mr.Siby"
    },
    {
        question: "Qui dit toujours << en anglais il y a plus de trois mille mots?",
        options: ["Mr.Baldé", "Mr.Senghor", "Mr.Diene", "Mr.Siby"],
        correctAnswer: "Mr.Diene"
    },
    {
        question: "Quel prof aime trop répéter << donc, voyez?",
        options: ["Mr.Sarr", "Mr.Bop", "Sn.Cissé", "Mr.Senghor"],
        correctAnswer: "Mr.Senghor"
    },
    {
        question: "Qui est cette prof, quand il entre en classe tu tramble?",
        options: ["Mr.Sagna", "Mr.Bop", "Mr.Cissé", "Mr.Ngom"],
        correctAnswer: "Mr.Sagna,"
    },
    {
        question: "c'est un prof qui aime trop baissé ces lunette en te regardant?",
        options: ["Mr.Sarr", "Mr.Seck", "Sn.Cissé", "Mr.Siby"],
        correctAnswer: "Mr.Seck"
    },
    // Ajoutez d'autres questions ici
];

let currentQuestionIndex = 0;
let score = 3;

function displayQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = function () {
            checkAnswer(this);
        };
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption.textContent === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `<h1>Quiz terminé!</h1><p>Votre score est de ${score}/${questions.length}</p>`;
}
displayQuestion();
