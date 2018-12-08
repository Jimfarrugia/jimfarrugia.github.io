// Create empty scoreboard
var userWins = 0;
var pcWins = 0;
var draws = 0;

function battle(userPick){
			
	// Get a random number between 1-3
	var number = Math.floor((Math.random()*3)+1);
	
	// Base the computer's weapon choice on the random number
	var pcPick;
	if 		(number === 1) {pcPick = "rock";}
	else if (number === 2) {pcPick = "paper";}
	else 				   {pcPick = "scissors";}
	
	// Rules of battle
	switch(userPick) {
		case pcPick:
			var result = "It's a DRAW!";
			draws++;
		break;
		case "rock":
			if (pcPick === "paper") {
				var result = "You LOSE!";
				pcWins++;
			} else {
				var result = "You WIN!";
				userWins++;
			}
		break;
		case "paper":
			if (pcPick === "rock") {
				var result = "You WIN!";
				userWins++;
			} else {
				var result = "You LOSE!";
				pcWins++;
			}
		break;
		case "scissors":
			if (pcPick === "paper") {
				var result = "You WIN!";
				userWins++;
			} else {
				var result = "You LOSE!";
				pcWins++;
			}
		break;
	}
	
	// Set the colour of the result
	var resultColor;
	if (result === "You WIN!") {
		resultColor = "green";
	} else if (result === "You LOSE!") {
		resultColor = "red";
	} else {
		resultColor = "blue";
	}
	var resultDisplay = "<span style=\"color: " + resultColor + "\">" + result + "</span>";
	
	// Display the choices
	document.getElementById("choices").innerHTML = 
	"Your choice: <span>" + userPick + "</span></br>" +
	"PC's choice: <span>" + pcPick + "</span>";
	
	// Display the results
	document.getElementById("results").innerHTML = resultDisplay;
	
	// Update score
	document.getElementById("scoreboard").setAttribute("style", "display: block;");
	document.getElementById("wins").innerHTML = userWins;
	document.getElementById("losses").innerHTML = pcWins;
	document.getElementById("draws").innerHTML = draws;
}










