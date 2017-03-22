var numRightAnswers = 0;
var numWrongAnswers = 0;
var numUnanswered = 0;



$("#start-button").on("click", function() {

    populateQuestions();


});

function populateQuestions() {
    //fill in divs with question stuff and a submit button; hide/empty start button
    $("#question1").html("<div class = 'questionheading'>Question 1 </div> <br>");
    $("#question1").append("<input name='q1' type='radio' value='right'/> Right Answer  ");
    $("#question1").append("<input name='q1' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question1").append("<input name='q1' type='radio' value='wrong'/> Wrong Answer 2  ");
    $("#question1").append("<input name='q1' type='radio' value='wrong'/> Wrong Answer 3  ");

    $("#question2").append("<br>");
    $("#question2").append("<div class = 'questionheading'>Question 2 </div> <br>");
    $("#question2").append("<input name='q2' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question2").append("<input name='q2' type='radio' value='wrong'/> Wrong Answer 2  ");
    $("#question2").append("<input name='q2' type='radio' value='right'/> Right Answer   ");
    $("#question2").append("<input name='q2' type='radio' value='wrong'/> Wrong Answer 3  ");

    $("#question3").append("<br>");
    $("#question3").append("<div class = 'questionheading'>Question 3 </div> <br>");
    $("#question3").append("<input name='q3' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question3").append("<input name='q3' type='radio' value='wrong'/> Wrong Answer 2  ");
    $("#question3").append("<input name='q3' type='radio' value='right'/> Right Answer   ");
    $("#question3").append("<input name='q3' type='radio' value='wrong'/> Wrong Answer 3  ");

    $("#question4").append("<br>");
    $("#question4").append("<div class = 'questionheading'>Question 4 </div> <br>");
    $("#question4").append("<input name='q4' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question4").append("<input name='q4' type='radio' value='wrong'/> Wrong Answer 2  ");
    $("#question4").append("<input name='q4' type='radio' value='wrong'/> Wrong Answer 3  ");
    $("#question4").append("<input name='q4' type='radio' value='right'/> Right Answer  ");

    $("#question5").append("<br>");
    $("#question5").append("<div class = 'questionheading'>Question 5 </div> <br>");
    $("#question5").append("<input name='q5' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question5").append("<input name='q5' type='radio' value='right'/> Right Answer  ");
    $("#question5").append("<input name='q5' type='radio' value='wrong'/> Wrong Answer 2   ");
    $("#question5").append("<input name='q5' type='radio' value='wrong'/> Wrong Answer 3  ");

    $("#question6").append("<br>");
    $("#question6").append("<div class = 'questionheading'>Question 6 </div> <br>");
    $("#question6").append("<input name='q6' type='radio' value='right'/> Right Answer  ");
    $("#question6").append("<input name='q6' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question6").append("<input name='q6' type='radio' value='wrong'/> Wrong Answer 2  ");
    $("#question6").append("<input name='q6' type='radio' value='wrong'/> Wrong Answer 3  ");

    $("#question7").append("<br>");
    $("#question7").append("<div class = 'questionheading'>Question 7 </div> <br>");
    $("#question7").append("<input name='q7' type='radio' value='right'/> Right Answer  ");
    $("#question7").append("<input name='q7' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question7").append("<input name='q7' type='radio' value='wrong'/> Wrong Answer 2  ");
    $("#question7").append("<input name='q7' type='radio' value='wrong'/> Wrong Answer 3  ");

    $("#question8").append("<br>");
    $("#question8").append("<div class = 'questionheading'>Question 8 </div> <br>");
    $("#question8").append("<input name='q8' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question8").append("<input name='q8' type='radio' value='right'/> Right Answer  ");
    $("#question8").append("<input name='q8' type='radio' value='wrong'/> Wrong Answer 2 ");
    $("#question8").append("<input name='q8' type='radio' value='wrong'/> Wrong Answer 3  ");


    $("#question9").append("<br>");
    $("#question9").append("<div class = 'questionheading'>Question 9 </div> <br>");
    $("#question9").append("<input name='q9' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question9").append("<input name='q9' type='radio' value='wrong'/> Wrong Answer 2  ");
    $("#question9").append("<input name='q9' type='radio' value='wrong'/> Wrong Answer 3  ");
    $("#question9").append("<input name='q9' type='radio' value='right'/> Right Answer  ");

    $("#question10").append("<br>");
    $("#question10").append("<div class = 'questionheading'>Question 10 </div> <br>");
    $("#question10").append("<input name='q10' type='radio' value='wrong'/> Wrong Answer 1  ");
    $("#question10").append("<input name='q10' type='radio' value='wrong'/> Wrong Answer 2  ");
    $("#question10").append("<input name='q10' type='radio' value='right'/> Right Answer   ");
    $("#question10").append("<input name='q10' type='radio' value='wrong'/> Wrong Answer 3  ");

    $("#submitbuttonholder").append("<br> <br>");
    $("#submitbuttonholder").append("<input name='submit' type='button' value='Submit Answers!' />");

    $("#startbuttonholder").empty();


}

function scoreCalculator() {

//loop through each question, check if right, wrong, or unanswered, update variable accordingly
    for (i = 1; i <= 10; i++) {

        var iToString = i.toString();
        var lookupName = "q" + iToString;
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

            if (i === 3 && !currentQuestion[i].checked) { //if all boxes except the last have been looped through and the last box is not checked
                if (isUnanswered === true) { //if no answer has been selected yet
                    numUnanswered++;
                }

            }

        }
    }
}



}
