$(document).ready(function() {
	var questions = new Array(4);
	questions[0] = new Question ("What is black, white, and read all over?", "Read Panda", "Newspaper", "Race War", "Hunting ", 2);
	questions[1] = new Question ("W1at is black, white, and read all over?", "Read Panda", "Newspaper", "Race War", "Hunting ", 2);
	questions[2] = new Question ("Wh2at is black, white, and read all over?", "Read Panda", "Newspaper", "Race War", "Hunting ", 2);
	questions[3] = new Question ("Wh4at is black, white, and read all over?", "Read Panda", "Newspaper", "Race War", "Hunting ", 2);

	var currentQuestion = -1;
	var correct = 0;
	var wrong = 0;
	var timesup = 0;
	var correctAnswer = 0

	function Question(statement, answer1, answer2, answer3, answer4, correctAnswer) {
		this.statement = statement;
		this.answer1 = answer1;
		this.answer2 = answer2;
		this.answer3 = answer3;
		this.answer4 = answer4;
		this.correctAnswer = correctAnswer;
	}
	function quiz(){
		currentQuestion++
		correctAnswer = questions[currentQuestion].correctAnswer;
		console.log(correctAnswer)
		$("#intro").empty();
		$("#question").html("<p>"+questions[currentQuestion].statement+"</p>");
		$("#1").html("<p>"+questions[currentQuestion].answer1+"</p>");
		$("#2").html("<p>"+questions[currentQuestion].answer2+"</p>");
		$("#3").html("<p>"+questions[currentQuestion].answer3+"</p>");
		$("#4").html("<p>"+questions[currentQuestion].answer4+"</p>");
		$(".answer").click( function() {
			console.log($(this).attr("id"));
			if ($(this).attr("id") == correctAnswer) {
				console.log("correct");
				correct++;
				quiz();
			}
		})
	}
		
	
	
	function startScreen() {
		$(".content").empty();
		$("#intro").html("<h2> Press Start to begin</h2> <p id='start'>start</p>");
			currentQuestion = -1;
			correct = 0;
			wrong = 0;
			timesup = 0;
	}

	$("#intro").click( function() {
		quiz();
	})
	startScreen();

})
