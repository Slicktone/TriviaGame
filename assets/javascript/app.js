
// Once the user pushes start, timer will begin.
var number = 10

$("#startGame").on("click", run);


function decrement() {
	number--;
	$("#runTimer").html("<h2>" + number + "</h2>")

	if (number === 0){
		stop();
		alert("Aye")
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
		question : "test123",
		answers : ["firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer"],
		picture : []
	},
	thirdSet: {
		question : "test123",
		answers : ["firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer"],
		picture : []
	},
	fourthSet: {
		question : "test123",
		answers : ["firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer"],
		picture : []
	}
}
function run() {
	counter = setInterval(decrement, 1000);
	
		$("#answerOne").html(questions.firstSet.answers[0]);	
}





