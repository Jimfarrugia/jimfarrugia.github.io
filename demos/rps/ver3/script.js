// Reset scores when page loads
var userWins = 0;
var pcWins = 0;
var draws = 0;

// When the user selects an option, this function triggers
function battle(userPick) {
    
    // Get a random number between 1 and 1001
    var number = Math.floor((Math.random()*1001)+1);
    
    // Base the pc's weapon choice on the random number
	var pcPick;
	if 		(number > 0 && number <= 333) 
            {pcPick = "rock";}
	else if (number > 333 && number <= 667)
            {pcPick = "paper";}
	else if (number > 667 && number <= 1001)
            {pcPick = "scissors";}
    else    {pcPick = 'ERROR: PC could not make a choice!';}
    
    // Error Check
    if (pcPick == 'ERROR: PC could not make a choice!'){
        alert(pcPick);
        return;
    }
    
    // Compare the user's choice with the pc's choice
    var result;
	switch(userPick){
        // If both are the same, it's a draw.
		case pcPick:
			result = "It's a DRAW!";
            // Add 1 to the relevant column in the scoreboard.
			draws++;
		break;
		case "rock":
			if (pcPick === "paper") {
				result = "You LOSE!";
				pcWins++;
			} else {
				result = "You WIN!";
				userWins++;
			}
		break;
		case "paper":
			if (pcPick === "rock") {
				result = "You WIN!";
				userWins++;
			} else {
				result = "You LOSE!";
				pcWins++;
			}
		break;
		case "scissors":
			if (pcPick === "paper") {
				result = "You WIN!";
				userWins++;
			} else {
				result = "You LOSE!";
				pcWins++;
			}
		break;
        default:
            result = "ERROR: User selection invalid!";
	}// end switch()
    
    // Error Check
    if (result == "ERROR: User selection invalid!") {
        alert(result);
        return;
    }
    
    // Set the colour of the result.
    var resultColor;
	if (result === "You WIN!") {
        // When you win the result is green.
		resultColor = "green";
	} else if (result === "You LOSE!") {
        // When you lose the result is red.
		resultColor = "red";
	} else {
        // When it's a draw the result is blue.
		resultColor = "blue";
	}
    
    // Create the results, ready to be displayed.
	var resultDisplay = "<span style=\"color: " + resultColor + "\">" + result + "</span>";
    
    // Display the user's choice.
    document.getElementById('userChoice').innerHTML = userPick;
    
    // Display the user's choice.
    document.getElementById('pcChoice').innerHTML = pcPick;
    
    // Display the outcome.
    document.getElementById('outcome').innerHTML = resultDisplay;
    
    // Tally
    
    // How many multiples of 5?
    var winStrikes = Math.floor(userWins / 5);
    var lossStrikes = Math.floor(pcWins / 5);
    var drawStrikes = Math.floor(draws / 5);
    
    // How many remaining?
    var winRemain = userWins % 5;
    var lossRemain = pcWins % 5;
    var drawRemain = draws % 5;
    
    // Clear the content
    document.getElementById("winTally").innerHTML = "";
    document.getElementById("lossTally").innerHTML = "";
    document.getElementById("drawTally").innerHTML = "";
    
    // For every 5 points, print a strike
    for (i = winStrikes; i > 0; i--) {
        document.getElementById("winTally").innerHTML += '<img src="img/tally-strike.png"> ';
    }
    for (i = lossStrikes; i > 0; i--) {
        document.getElementById("lossTally").innerHTML += '<img src="img/tally-strike.png"> ';
    }
    for (i = drawStrikes; i > 0; i--) {
        document.getElementById("drawTally").innerHTML += '<img src="img/tally-strike.png"> ';
    }
    
    // For each point remaining, print a tally
    for (i = winRemain; i > 0; i--) {
        document.getElementById("winTally").innerHTML += '<img src="img/tally.png"> ';
    }
    for (i = lossRemain; i > 0; i--) {
        document.getElementById("lossTally").innerHTML += '<img src="img/tally.png"> ';
    }
    for (i = drawRemain; i > 0; i--) {
        document.getElementById("drawTally").innerHTML += '<img src="img/tally.png"> ';
    }
    
    // Display 0 when there are no points for an outcome. (eg. Wins: 0)
    if (winStrikes == 0 && winRemain == 0) {
        document.getElementById("winTally").innerHTML = ' 0';
    }
    if (lossStrikes == 0 && lossRemain == 0) {
        document.getElementById("lossTally").innerHTML = ' 0';
    }
    if (drawStrikes == 0 && drawRemain == 0) {
        document.getElementById("drawTally").innerHTML = ' 0';
    }
    
    // Display the whole results section.
    document.getElementById("results").setAttribute("style", "display: block");
    
}// end battle(userPick)




















