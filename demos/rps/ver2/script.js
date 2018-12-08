/*
    script.js file for Rock, Paper, Scissors!
    written by Jim Farrugia of jimfarrugia.com
*/

// Create empty scoreboard
var userWins = 0;
var pcWins = 0;
var draws = 0;

// When the user selects a 'weapon', this function triggers
function battle(userPick) {
			
	// Get a random number from 1-3
	var number = Math.floor((Math.random()*3)+1);
	
	// Base the pc's weapon choice on the random number
	var pcPick;
	if 		(number === 1) {pcPick = "rock";}
	else if (number === 2) {pcPick = "paper";}
	else 				   {pcPick = "scissors";}
	
	// Compare the user's choice with the pc's choice
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
	}// end switch()
	
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
	
	// Display the choices
	document.getElementById("choices").innerHTML = 
    // Your choice was...
	"Your choice: <span>" + userPick + "</span></br>" +
    // The PC's choice was...
	"PC's choice: <span>" + pcPick + "</span>";
	
	// Display the results
    // (ie. "You Lose", "You Win" or "It's a Draw")
	document.getElementById("results").innerHTML = resultDisplay;
	
	// Update the scoreboard
	document.getElementById("scoreboard").setAttribute("style", "display: block;");
	document.getElementById("wins").innerHTML = userWins;
	document.getElementById("losses").innerHTML = pcWins;
	document.getElementById("draws").innerHTML = draws;
    
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
        document.getElementById("winTally").innerHTML += '<img src="tally-strike.png"> ';
    }
    for (i = lossStrikes; i > 0; i--) {
        document.getElementById("lossTally").innerHTML += '<img src="tally-strike.png"> ';
    }
    for (i = drawStrikes; i > 0; i--) {
        document.getElementById("drawTally").innerHTML += '<img src="tally-strike.png"> ';
    }
    
    // For each point remaining, print a tally
    for (i = winRemain; i > 0; i--) {
        document.getElementById("winTally").innerHTML += '<img src="tally.png"> ';
    }
    for (i = lossRemain; i > 0; i--) {
        document.getElementById("lossTally").innerHTML += '<img src="tally.png"> ';
    }
    for (i = drawRemain; i > 0; i--) {
        document.getElementById("drawTally").innerHTML += '<img src="tally.png"> ';
    }
    
}// end battle()
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
        The function can run repeatedly and the scoreboard will only reset
        if the user refreshes the browser.
        
        Planned updates:
            - The scoreboard should be more visually appealing.
              It currently sticks out like a sore thumb... an ugly one.
            - There will be audio.
              When the results are displayed, there should be a short sound.
            - [COMPLETE]The scoreboard will use a tally system rather than numerals.
              I'm thinking of having JS/jQuery add an <img> to innerHTML every round.
              Maybe with a subtle animation such as slideDown.
              But how to make the tally do a strikethrough for every mutliple of 5?
            - The layout's HTML should be cleaned up. (Low-priority, nit picking)
              I don't like that the div's are laid out like a grid and have
              names like "bottom-left".  It may as well be a table, the way it is currently.
            - It would be nice if the whole page was responsive.  At least to a point.
    */
