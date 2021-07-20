const quizData = [
    {
        question: 'How old is Dylan?',
        a: '10',
        b: '15',
        c: '23',
        d: '30',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: "Who is the President of US?",
        a: 'Kanye West',
        b: 'Joe Biden',
        c: 'Donald Trump',
        d: 'George Bush',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
];

const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData
    [currentQuiz];
    questionE1.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    getSelected();
    /*
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO: show results
        alert('You finished!')
    }
    */


})

function getSelected() {
    const answerE1s = document.querySelectorAll(".answer");


    answerE1s.forEach((answerE1) => {
        if(answerE1.checked) {
            answer = answerE1.id;
        }
    });
}