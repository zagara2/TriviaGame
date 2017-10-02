var numRightAnswers = 0;
var numWrongAnswers = 0;
var numUnanswered = 0;
var seconds = 120;
var intervalId;
$("#form-main-container").hide();
$("#scoreData").hide();



$("#start-button").on("click", function() {

	$("#form-main-container").show();

    secondsCounterInterval();
    populateQuestions();
    


});

// $("#submit-button").on("click", function() {

//     gameAftermath();


// });

// $("#restart-button").on("click", function() {
// 	numRightAnswers = 0;
//  numWrongAnswers = 0;
// numUnanswered = 0;
// $("#scoreData").empty();
// populateQuestions();


    


// });

function populateQuestions() {
    //fill in divs with question stuff and a submit button; hide/empty start button
    $("#question1").html("<div class = 'questionheading'>'Garfield' takes place in what state? </div> <br>");
    $("#question1").append("<input name='q1' type='radio' value='right'/> Indiana  ");
    $("#question1").append("<input name='q1' type='radio' value='wrong'/> Wisconsin  ");
    $("#question1").append("<input name='q1' type='radio' value='wrong'/> New York  ");
    $("#question1").append("<input name='q1' type='radio' value='wrong'/> Georgia  ");

    $("#question2").append("<br>");
    $("#question2").append("<div class = 'questionheading'>Garfield the cat is named after... </div> <br>");
    $("#question2").append("<input name='q2' type='radio' value='wrong'/> former president James Garfield  ");
    $("#question2").append("<input name='q2' type='radio' value='wrong'/> the high school that creator Jim Davis graduated from  ");
    $("#question2").append("<input name='q2' type='radio' value='right'/> Jim Davis' grandfather   ");
    $("#question2").append("<input name='q2' type='radio' value='wrong'/> Richard Garfield, creator of Magic: The Gathering  ");

    $("#question3").append("<br>");
    $("#question3").append("<div class = 'questionheading'>What does Jon Arbuckle do for a living? </div> <br>");
    $("#question3").append("<input name='q3' type='radio' value='wrong'/> advertising  ");
    $("#question3").append("<input name='q3' type='radio' value='wrong'/> subsititute teacher  ");
    $("#question3").append("<input name='q3' type='radio' value='right'/> cartoonist   ");
    $("#question3").append("<input name='q3' type='radio' value='wrong'/> bank teller  ");

    $("#question4").append("<br>");
    $("#question4").append("<div class = 'questionheading'>How many newspapers and journals around the world is 'Garfield' syndicated in? </div> <br>");
    $("#question4").append("<input name='q4' type='radio' value='wrong'/> 843  ");
    $("#question4").append("<input name='q4' type='radio' value='wrong'/> 1200  ");
    $("#question4").append("<input name='q4' type='radio' value='wrong'/> 2269  ");
    $("#question4").append("<input name='q4' type='radio' value='right'/> 2500  ");

    $("#question5").append("<br>");
    $("#question5").append("<div class = 'questionheading'>What is Garfield called in Sweden? </div> <br>");
    $("#question5").append("<input name='q5' type='radio' value='wrong'/> Gerbjörn  ");
    $("#question5").append("<input name='q5' type='radio' value='right'/> Gustav  ");
    $("#question5").append("<input name='q5' type='radio' value='wrong'/> Gilbert   ");
    $("#question5").append("<input name='q5' type='radio' value='wrong'/> Gottvald  ");

    $("#question6").append("<br>");
    $("#question6").append("<div class = 'questionheading'>What breed of cat is Garfield? </div> <br>");
    $("#question6").append("<input name='q6' type='radio' value='right'/> Exotic Shorthair  ");
    $("#question6").append("<input name='q6' type='radio' value='wrong'/> Maine Coon  ");
    $("#question6").append("<input name='q6' type='radio' value='wrong'/> Persian  ");
    $("#question6").append("<input name='q6' type='radio' value='wrong'/> Ragdoll  ");

    $("#question7").append("<br>");
    $("#question7").append("<div class = 'questionheading'>'Garfield' attracted criticism from the media when it made what appeared to be a negative reference to what holiday? </div> <br>");
    $("#question7").append("<input name='q7' type='radio' value='right'/> Veterans' Day  ");
    $("#question7").append("<input name='q7' type='radio' value='wrong'/> Christmas  ");
    $("#question7").append("<input name='q7' type='radio' value='wrong'/> Easter  ");
    $("#question7").append("<input name='q7' type='radio' value='wrong'/> Earth Day  ");

    $("#question8").append("<br>");
    $("#question8").append("<div class = 'questionheading'>To what city does Garfield frequently try to mail Nermal? </div> <br>");
    $("#question8").append("<input name='q8' type='radio' value='wrong'/> Timbuktu  ");
    $("#question8").append("<input name='q8' type='radio' value='right'/> Abu Dhabi  ");
    $("#question8").append("<input name='q8' type='radio' value='wrong'/> Beijing ");
    $("#question8").append("<input name='q8' type='radio' value='wrong'/> Kuala Lumpur  ");


    $("#question9").append("<br>");
    $("#question9").append("<div class = 'questionheading'>What is Jon's middle initial? </div> <br>");
    $("#question9").append("<input name='q9' type='radio' value='wrong'/> J  ");
    $("#question9").append("<input name='q9' type='radio' value='wrong'/> P  ");
    $("#question9").append("<input name='q9' type='radio' value='right'/> Q  ");
    $("#question9").append("<input name='q9' type='radio' value='wrong'/> His parents didn't love him enough to give him a middle name  ");

    $("#question10").append("<br>");
    $("#question10").append("<div class = 'questionheading'>Who is Clive? </div> <br>");
    $("#question10").append("<input name='q10' type='radio' value='wrong'/> A mouse  ");
    $("#question10").append("<input name='q10' type='radio' value='wrong'/> A spider  ");
    $("#question10").append("<input name='q10' type='radio' value='right'/> Garfield's imaginary friend  ");
    $("#question10").append("<input name='q10' type='radio' value='wrong'/> Garfield's romantic rival  ");

    $("#submitbuttonholder").append("<br> <br>");
    $("#submitbuttonholder").append("<input onclick='gameAftermath()' name='submit' type='button' value='Submit Answers!' id = 'submit-button' />");

    $("#startbuttonholder").empty();


}

function scoreCalculator(lookupName) {

//loop through each question, check if right, wrong, or unanswered, update variable accordingly
    // for (i = 1; i <= 10; i++) {

        // var iToString = i.toString();
        // var lookupName = "q" + iToString;
        var currentQuestion = document.getElementsByName(lookupName);
        for (i = 0; i < currentQuestion.length; i++) {
            var isUnanswered = true;
            if (currentQuestion[i].checked) {
                if (currentQuestion[i].value === 'right') {
                    numRightAnswers++;
                    isUnanswered = false;
                    break;
                } else if (currentQuestion[i].value === "wrong") {
                    numWrongAnswers++;
                    isUnanswered = false;
                    break;
                }

            }

            if (i === (currentQuestion.length)-1 && !currentQuestion[i].checked) { //if all boxes except the last have been looped through and the last box is not checked
                if (isUnanswered === true) { //if no answer has been selected yet
                    numUnanswered++;
                }

            }

        }
    // }
}

function totalScoreCalculator() {
	scoreCalculator("q1");
	scoreCalculator("q2");
	scoreCalculator("q3");
	scoreCalculator("q4");
	scoreCalculator("q5");
	scoreCalculator("q6");
	scoreCalculator("q7");
	scoreCalculator("q8");
	scoreCalculator("q9");
	scoreCalculator("q10");

}

function gameAftermath() {
	//display score info; empty form divs
	console.log("game aftermath");
	$("#scoreData").show();
	$("#form-main-container").hide();
	$("#timerdisplay").appendTo("#scoreData");
	$("#submitbuttonholder").hide();
	clearInterval(intervalId); //pause timer


	totalScoreCalculator();
	$("#question1").empty();
	$("#question2").empty();
	$("#question3").empty();
	$("#question4").empty();
	$("#question5").empty();
	$("#question6").empty();
	$("#question7").empty();
	$("#question8").empty();
	$("#question9").empty();
	$("#question10").empty();
	$("#submitbuttonholder").empty();


	// $("#scoreData").append("All Done!" + "<br>");
	$("#scoreData").append("Number of correct answers: " + numRightAnswers + "<br>");
	$("#scoreData").append("Number of incorrect answers: " + numWrongAnswers + "<br>");
	$("#scoreData").append("Number of unanswered questions: " + numUnanswered + "<br><br>");
	console.log(numRightAnswers);

	if (numRightAnswers >= 7 && numRightAnswers !=10) {
		$("#scoreData").append("You sure know your Garfield. <br><br>");
	}

	else if (numRightAnswers <= 4) {
		$("#scoreData").append("Must be a case of the Mondays. <br><br>");
	}

	else if (4<numRightAnswers && numRightAnswers<7) {

		$("#scoreData").append("Could be better, could be worse. <br><br>");


	}

	else if (numRightAnswers === 10) {
	$("#scoreData").append("Lasagna for dinner tonight, baby! <br><br>");
	}

	$("#scoreData").append("<input onclick='restart()' name='submit' type='button' value='Click Me to Try Again!' id = 'restart-button' />")

}

// "<br><button type = 'button' id ='restart-button'>Click Me to Try Again!</button>"
// "<input onclick='gameAftermath()' name='submit' type='button' value='Submit Answers!' id = 'submit-button' />"

function restart() {

console.log("game restart");
$("#scoreData").hide();
	$("#form-main-container").show();
	
	$("#timerdisplay").prependTo("#form-main-container");
	$("#submitbuttonholder").show();
seconds = 120;//reset amount of time on the timer
secondsCounterInterval();
numRightAnswers = 0;
numWrongAnswers = 0;
numUnanswered = 0;
$("#scoreData").empty();

populateQuestions();
// timerStopandReset();



}

function secondsCounterDisplay() {
	//seconds--;
	$("#timerdisplay").html("Time Remaining: " + seconds + " Seconds");
	
	if (seconds === 0) {
		clearInterval(intervalId); //avoid negative numbers being displayed
		$("#timerdisplay").html("TIME'S UP!");
		gameAftermath();//go to end screen if out of time
	}
	seconds--;

}

function secondsCounterInterval() {
	intervalId = setInterval(secondsCounterDisplay, 1000);

}

secondsCounterInterval();
// function timerStopandReset() {

// clearInterval(intervalId);
// seconds = 10;

// }






