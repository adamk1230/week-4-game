//Define Variables
var randomNumber = Math.floor(Math.random() * 102) + 19;
var diamondValue = Math.floor(Math.random() *12) + 1;
var emeraldValue = Math.floor(Math.random() *12) + 1;
var rubyValue = Math.floor(Math.random() *12) + 1;
var topazValue = Math.floor(Math.random() *12) + 1;
var totalScore = 0;
var wins = 0;
var losses = 0;


console.log("randomNumber: " + randomNumber);
console.log("diamondValue: " + diamondValue);
console.log("emeraldValue: " + emeraldValue);
console.log("rubyValue: " + rubyValue);
console.log("topazValue: " + topazValue);


//Assign values
function gemValue(){
	$("#diamond").attr("value", diamondValue);
	$("#emerald").attr("value", emeraldValue);
	$("#ruby").attr("value", rubyValue);
	$("#topaz").attr("value", topazValue);
	$("#randomNumber").html(randomNumber);
	$("#totalScore").html(totalScore);
	}

//Display wins, losses
$("#wins").html(wins);
$("#losses").html(losses);

//Reset function
function reset(){
	randomNumber = Math.floor(Math.random() * 102) + 19;
	diamondValue = Math.floor(Math.random() *12) + 1;
	emeraldValue = Math.floor(Math.random() *12) + 1;
	rubyValue = Math.floor(Math.random() *12) + 1;
	topazValue = Math.floor(Math.random() *12) + 1;
	totalScore = 0;
	gemValue();
}


gemValue();


$(".gems").on("click", function() {

	//Increases total score when gem is clicked
	totalScore += parseInt($(this).attr("value"));
	console.log("totalScore: "+ totalScore);

	//Updates total score
	$("#totalScore").html(totalScore);

	//Update wins and losses
	if (totalScore == randomNumber) {
		wins++;
		$("#wins").html(wins);
		reset();
	}
	if (totalScore > randomNumber) {
		losses++;
		$("#losses").html(losses);
		reset();
	}





}); //ends on click






//$(document).on("pageload"),