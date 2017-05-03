// var state = {
//   items: []
// };

// var addItem = function(state, item) {
//     state.items.push(item);
// };
var score = 0;

var questionsList = [
	
	{ question: "Which is the largest US state by area?",
	  options: ["Texas", "Montana", "Alaska", "California"],
	  correctAnswer: "Alaska"
	},

	{ question: "What country is home to the tallest mountain in the world, Mount Everest?",
	  options: ["Nepal", "India", "Pakistan", "USA"],
	  correctAnswer: "Nepal"
	},

	{ question: "By area, what is the smallest country on the planet?",
	  options: ["Vatican City", "Monaco", "Nauru", "New Zealand"],
	  correctAnswer: "Vatican City"
	},

	{ question: "What is the name of the tallest uninterrupted waterfall in the world?",
	  options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Yosemite Falls"],
	  correctAnswer: "Angel Falls"
	},

	{ question: "Which is the most populous country in the world?",
	  options: ["India", "Indonesia", "China", "Russia"],
	  correctAnswer: "China"
	}

]


function renderQuestion(questionsList, questionNumber){
	var quizForm = $('.quizForm');
	quizForm.html('');
	var quizDiv = $('.quizDiv');
	quizDiv.html(createQuestion(questionsList, questionNumber));
	addClickEvent(questionNumber);
};


function createQuestion(questionsList, questionNumber){

	return `<h1>${questionNumber + 1}/5  ${questionsList[questionNumber].question}</h1>
	          	
			<button class="option option1">
				${questionsList[questionNumber].options[0]}
			</button>

		    <button class="option option2">
		    	${questionsList[questionNumber].options[1]}
		    </button>

	  		<button class="option option3">
	  			${questionsList[questionNumber].options[2]}
	  		</button>

		    <button class="option option4">
		    	${questionsList[questionNumber].options[3]}
		    </button>`
}	


function beginQuiz() {
	$('form').submit(function(event) {
    	event.preventDefault();
    	renderQuestion(questionsList, 0);
	});
}


function addClickEvent(questionNumber) {
	$('.quizDiv button').click(function(event) {
		
		
		if (event.target.innerText == questionsList[questionNumber].correctAnswer) {
			score = score + 1;

			$('.text').html("Correct!")
			
		} else {
			
			$('.text').html(`Wrong.  The correct answer is ${questionsList[questionNumber].correctAnswer}.`)
		}

		$('.score').html(`Your score is ${score}/5.`);

		questionNumber = questionNumber + 1;

		if (questionNumber < 5) {
			var quizDiv = $('.quizDiv');
			quizDiv.html('');
			renderQuestion(questionsList, questionNumber);
		} else {
			$('.text').html('');
			var quizDiv = $('.quizDiv');
			quizDiv.html('');
			quizDiv.html(`<button class="resetQuiz">Retake Quiz</button>`);
		}
		
	});
}

beginQuiz();
$('.resetQuiz').click(function(event) {
	beginQuiz();
});