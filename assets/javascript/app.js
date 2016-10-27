
// Once the user pushes start, timer will begin.
var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

$("#startGame").on("click", runGame);

function startTimer() {
	number = 10;
	counter = setInterval(countDown, 1000);
}

function countDown() {
	number--;
	$("#runTimer").html("<h2>" + number + "</h2>")
	if (number === 0){
		stop();
	$("#runTimer").html("<h2> Times Up! </h2>")
	unAnswered++;
	}
}

function stop() {
	clearInterval(counter);
}

// questions and answer bank
var questions = {
	firstSet: {
		question : "What is the name of the first Harry Potter Book?",
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

// -----Game Start------
function runGame() {

for (var i = 0; i < questions.length; i++) {
	startTimer();

		$("#question").html(questions.firstSet.question);
		$("#answerOne").html(questions.firstSet.answers[0]);
		$("#answerTwo").html(questions.firstSet.answers[1]);
		$("#answerThree").html(questions.firstSet.answers[2]);
		$("#answerFour").html(questions.firstSet.answers[3]);
}

$("#answerOne").click(function(){
var answerOne = false;
	if(!answerOne) {
			answerOne = true;
			correctAnswers++;
			$(".content").html("Correct!"); // displays correct answer.
			}
		})

// Testing out these click functions on the buttons ******SHORTEN THESE LATER*****
$("#answerTwo").click(function(){
	incorrect++
	$(".content").html("Wrong Answer!"); // display what the correct answer should be.
	console.log(questions.firstSet.answers[0]);
})
$("#answerThree").click(function(){
	incorrect++
	$(".content").html("Wrong Answer!"); // display what the correct answer should be.
	console.log(questions.firstSet.answers[0]);
})
$("#answerFour").click(function(){
	incorrect++
	$(".content").html("Wrong Answer!"); // display what the correct answer should be.
	console.log(questions.firstSet.answers[0]);
})

}
// ----- Second Set Begins ----
// maybe use a for loop?
function secondSet() {

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
			setTimeout(thirdSet, 3000);
			}
})		
}		





