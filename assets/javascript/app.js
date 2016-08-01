$(document).ready(function() {
	//list of questions, to increase length of quiz just add Question obj to Array.
	var questions = new Array(6);
	questions[0] = new Question ("What percentage of our brain do we actually use?", "10%", "90%", "100%", "it is unknown", "3", "Neurologists describe that we use virtually every part of the brain, and that (most of) the brain is active almost all the time.", "assets/images/brain.jpg");
	questions[1] = new Question ("Which is false?", "Alcohol keeps you warm", "Tomatoes are a fruit", "Salty water boils slower", "the capital of Australia is Canberra", "1","Alcohol may make your skin feel warm, but this apparent heatwave is deceptive. A nip or two actually causes your blood vessels to dilate, moving warm blood closer to the surface of your skin, making you feel warmer temporarily. At the same time, however, those same veins pumping blood closer to the skin's surface causing you to lose core body heat.","assets/images/alcohol.jpg" );
	questions[2] = new Question ("What class did Albert Einstein fail as a kid?", "Mathematics", "Physics", "P.E", "None of the above", "4", "He failed one entry exam to a school but in fact, he actually excelled at mathematics throughout his schooling and even considered becoming a mathematician for a time","assets/images/einstein.jpg");
	questions[3] = new Question ("what color is your blood in your veins, before it touches oxygen?", "Purple", "Red", "Black", "Blue ", "2", "While many believe that de-oxygenated blood is blue, it is actually a myth because human blood is always red, hemoglobins actually use iron to move oxygen, so you get red blood from oxygenated iron, rust.", "assets/images/blood.png");
	questions[4] = new Question ("When asked, an undercover cop must ____", "show you their badge", "tell you they are a cop, its their job", "read you your miranda rights", "Nothing, they are undercover for a reason", "4", "Entrapment law in the United States does not require police officers to identify themselves as police in the case of a sting or other undercover work, and police officers may lie in doing such work. The law is instead specifically concerned with enticing people to commit crimes they would not have considered in the normal course of events","assets/images/cop.jpg");
	questions[5] = new Question ("Who wrote Twinkle Twinkle Little Star?", "Ann Taylor", "Wolfgang Amadeus Mozart", "Freddy Mercury", "old folk song, origins unknown", "1", "Twinkle Twinkle Little Star was composed by Ann Taylor not Mozart when he was 5 years old; he only composed variations on the tune, which originated from a French folk song, and at the age of 25 or 26.", "assets/images/blood.png");
	
	//tracks what question number currently on to show them in order 
	var currentQuestion = -1;
	//how many correct answers you currently have
	var correct = 0;
	//how many wrong answers you currently have
	var wrong = 0;
	//how many times you have run out of time
	var timesUp = 0;
	//labels Object items to be able to refer to them better.
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
	//screen that shows after the user selects an answer, will display index at top and list answer to previous question
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
	//dispays questions and runs timer.
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
				correct++;
				console.log("right answers:"+correct);
				gotIt("CORRECT");
			}else if ($(this).attr("id") !== correctAnswer){
				wrong++;
				console.log("wrong answers:"+wrong);
				gotIt("INCORRECT");
			}
		})
	}
	//will show when user has been asked all questions in the Array and will show them how they did, and allow them to try again
	function scoreScreen() {
		$(".content").empty();
		$("#intro").html(":Click to retry:");
		$("#question").html(
			"<div id=correct> Answered Correctly: "+correct+
			"</div> <div id=wrong> Answered Incorrectly:" +wrong+
			"</div><div id=timesUp> Ran out of time: "+timesUp+
			"</div>");
	}
	//initial screen when page is loaded.
	function startScreen() {
		$(".content").empty();
		$("#intro").html("<h2> Press Start to begin</h2> <p id='start'>start</p>");
	}
	//used to initiate and restart the quiz and variables.
	$("#intro").unbind().click( function() {
		currentQuestion = -1;
		correct = 0;
		wrong = 0;
		timesup = 0;
		quiz();
	})
	//when page loads dispays startScreen
	startScreen();
})
