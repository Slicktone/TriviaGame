
// Once the user pushes start, timer will begin.
var number = 10
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

$("#startGame").on("click", runGame);


function decrement() {
	number--;
	$("#runTimer").html("<h2>" + number + "</h2>")

	if (number === 0){
		stop();
	}
}

function stop() {
	clearInterval(counter);
}

// questions and answer bank
var questions = {
	firstSet: {
		question : "test123",
		answers : ["firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer"],
		picture : []
	},
	secondSet: {
		question : "test234",
		answers : ["firstAnswer1", "secondAnswer2", "thirdAnswer3", "fourthAnswer4"],
		picture : []
	},
	thirdSet: {
		question : "test567",
		answers : ["firstAnswer0", "secondAnswer0", "thirdAnswer0", "fourthAnswer0"],
		picture : []
	},
	fourthSet: {
		question : "test890",
		answers : ["1firstAnswer", "2secondAnswer", "3thirdAnswer", "4fourthAnswer"],
		picture : []
	}
}
function runGame() {
	counter = setInterval(decrement, 1000);


	// First set of Questions and Answers
		$("#question").html(questions.firstSet.question);
		$("#answerOne").html(questions.firstSet.answers[0]);
		$("#answerTwo").html(questions.firstSet.answers[1]);
		$("#answerThree").html(questions.firstSet.answers[2]);
		$("#answerFour").html(questions.firstSet.answers[3]);

$("#answerOne").click(function(){
var answerOne = false;
	if(!answerOne) {
			answerOne = true;
			correctAnswers++;
			$(".content").html("Correct!"); // display correct answer.
			setTimeout(secondSet, 3000);
}

$("#answerTwo", "#answerThree", "#answerFour").click(function(){
	$(".content").html("Wrong Answer!"); // display what the correct answer should be.
})

		
});		


}




