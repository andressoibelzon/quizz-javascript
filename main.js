const quizData = [
	{
		question: 'Zac Hanson, the younger brother from Hanson band ¿how old was him when they released the superhit Mmmbop in 1997?',
		a:'15',
		b:'11',
		c:'18',
		d:'23',
		correct: 'b'
	}, {
		question: 'Eminem‘s 8 Mile is named after a road in which city?',
		a: 'Indiana',
		b: 'Brooklyn',
		c: 'Houston',
		d: 'Detroit',
		correct: 'd'
	}, {
		question: 'What was the first music video to ever air on MTV?',
		a: 'Video Killed the Radio Star by The Buggles',
		b: 'Money for Nothing by Dire Straits',
		c: 'Pour Some Sugar On Me by Def Leppard',
		d: 'Enter Sandman by Metallica',
		correct: 'a'
	}, {
		question: 'The Weeknd samples which ’80s megahit in “Blinding Lights?”',
		a: 'West End Girls by Pet Shop Boys',
		b: 'Waterllo by ABBA',
		c: 'Hungry like the Wolf by Duran Duran',
		d: 'Take On Me by A-ha',
		correct: 'd'
	}
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.	question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked){
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers (){
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click",() => {
	//check to see the answer
	const answer = getSelected();

	if(answer){
		if(answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
			<h2> You answered correctly at ${score}/${quizData.length} questions.</h2>

			<button onclick= "location.reload()">Reload</button>
			`;
		}
	}
});

