$(document).ready(function() {
	var questions = new Array(4);
	questions[0] = new Question ("What percentage of our brain do we actually use?", "10%", "90%", "100%", "it is unknown", "3", "Neurologists describe that we use virtually every part of the brain, and that (most of) the brain is active almost all the time.", "assets/images/brain.jpg");
	questions[1] = new Question ("Which is false?", "Alcohol keeps you warm", "Tomatoes are a fruit", "Salty water boils slower", "the capital of Australia is Canberra", "1","Alcohol may make your skin feel warm, but this apparent heatwave is deceptive. A nip or two actually causes your blood vessels to dilate, moving warm blood closer to the surface of your skin, making you feel warmer temporarily. At the same time, however, those same veins pumping blood closer to the skin's surface causing you to lose core body heat.","assets/images/alcohol.jpg" );
	questions[2] = new Question ("What class did Albert Einstein fail as a kid?", "Mathematics", "Physics", "P.E", "None of the above", "4", "He failed one entry exam to a school but in fact, he actually excelled at mathematics throughout his schooling and even considered becoming a mathematician for a time","assets/images/einstein.jpg");
	questions[3] = new Question ("what color is your blood in your veins, before it touches oxygen?", "Purple", "Red", "Black", "Blue ", "2", "While many believe that de-oxygenated blood is blue, it is actually a myth because human blood is always red, hemoglobins actually use iron to move oxygen, so you get red blood from oxygenated iron, rust.", "assets/images/blood.png");

	var currentQuestion = -1;
	var correct = 0;
	var wrong = 0;
	var timesUp = 0;
	function Question(statement, answer1, answer2, answer3, answer4, correctAnswer, description, img) {
		this.statement = statement;
		this.answer1 = answer1;
		this.answer2 = answer2;
		this.answer3 = answer3;
		this.answer4 = answer4;
		this.correctAnswer = correctAnswer;
		this.description = description;
		this.img = img;
	} 
	function gotIt(index){
		$(".content").empty();
		$("#timer").html("<h2>"+index+"</h2>");
		$("#question").html("<img src='"+questions[currentQuestion].img+"'>");
		$("#1").html(questions[currentQuestion].description);
		setTimeout(function() {
			if (currentQuestion+1 == questions.length){
				scoreScreen();
			}
			else {
			quiz();
			}
		}, 5000);

	}
	function quiz(){
		var count =30;
		var counter=setInterval(timer, 1000);
		
		function timer() {
			count=count-1;
			if (count <=0){
				clearInterval(counter);
				timesUp++;
				gotIt("Times Up");
			}
			$("#timer").html(count + " secs");
		}
		currentQuestion++;
		console.log("question #" +currentQuestion);
		correctAnswer = questions[currentQuestion].correctAnswer;
		console.log("answer is #"+correctAnswer);
		$(".content").empty();
		$("#question").html("<p>"+questions[currentQuestion].statement+"</p>");
		$("#1").html("<p>"+questions[currentQuestion].answer1+"</p>");
		$("#2").html("<p>"+questions[currentQuestion].answer2+"</p>");
		$("#3").html("<p>"+questions[currentQuestion].answer3+"</p>");
		$("#4").html("<p>"+questions[currentQuestion].answer4+"</p>");
		
		$(".answer").unbind().click( function() {
			clearInterval(counter);
			console.log("answer selected:"+$(this).attr("id"));
			if ($(this).attr("id") === correctAnswer) {
				//gotIt = "CORRECT";
				correct++;
				console.log("right answers:"+correct);
				gotIt("CORRECT");
			}else if ($(this).attr("id") !== correctAnswer){
				//gotIt = "INCORRECT";
				wrong++;
				console.log("wrong answers:"+wrong);
				gotIt("INCORRECT");
			}
		})
	}
		
	function scoreScreen() {
		$(".content").empty();
		$("#intro").html(":Click to retry:");
		$("#question").html(
			"<div id=correct> Answered Correctly: "+correct+
			"</div> <div id=wrong> Answered Incorrectly:" +wrong+
			"</div><div id=timesUp> Ran out of time: "+timesUp+
			"</div>");

	}
	
	function startScreen() {
		$(".content").empty();
		$("#intro").html("<h2> Press Start to begin</h2> <p id='start'>start</p>");


	}

	$("#intro").unbind().click( function() {
		currentQuestion = -1;
		correct = 0;
		wrong = 0;
		timesup = 0;
		quiz();
	})
	startScreen();

})
