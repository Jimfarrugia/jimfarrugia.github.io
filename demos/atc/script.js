// Reset form fields on page load.
window.onload = function() { document.getElementById("form").reset(); };

function convert() {
/*
	1 - Retrieve user input.
*/

// Get user input for DAY field.
var d = document.getElementById("day");
var day = d.options[d.selectedIndex].value;

// Get user input for HOUR field.
var h = document.getElementById("hour");
var hour = h.options[h.selectedIndex].value;

// Get user input for MINUTE field.
var m = document.getElementById("min");
var minute = m.options[m.selectedIndex].value;

// Get user input for SECOND field.
var s = document.getElementById("sec");
var sec = s.options[s.selectedIndex].value;

// Get user input for AM/PM field.
var ap = document.getElementById("ampm");
var ampm = ap.options[ap.selectedIndex].value;

// Get user input for CONVERT FROM field.
var cf = document.getElementById("convertFrom");
var from = cf.options[cf.selectedIndex].value;

// Get user input for CONVERT TO field.
var ct = document.getElementById("convertTo");
var to = ct.options[ct.selectedIndex].value;
/*
	2 - Convert user's chosen time to UTC.
*/

// Create variables for UTC hours, mins, secs, AM/PM.
var UTC_H; 		// hour
var UTC_M; 		// minute
var UTC_S; 		// second
var UTC_AMPM;	// AM/PM
var UTC_D;		// day

// Give the variables apropriate values depending on which
// time zone was chosen.
switch (from) 
{
	case "CDT":
	UTC_H = hour - 10;
	UTC_M = minute - 30;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "CST":
	UTC_H = hour - 9;
	UTC_M = minute - 30;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "CXT":
	UTC_H = hour - 7;
	UTC_M = minute;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "EDT":
	UTC_H = hour - 11;
	UTC_M = minute;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "EST":
	UTC_H = hour - 10;
	UTC_M = minute;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "LHDT":
	UTC_H = hour - 11;
	UTC_M = minute;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "LHST":
	UTC_H = hour - 10;
	UTC_M = minute - 30;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "NFT":
	UTC_H = hour - 11;
	UTC_M = minute - 30;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "WDT":
	UTC_H = hour - 9;
	UTC_M = minute;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
	
	case "WST":
	UTC_H = hour - 8;
	UTC_M = minute;
	UTC_S = sec;
	UTC_AMPM = ampm;
	UTC_D = day;
	break;
}//switch(from)

// Some of the values may be negative numbers now.
// So to fix this...
if (UTC_M < 0) 
{
	UTC_M = UTC_M + 60;
	UTC_H = UTC_H - 1;
}
if (UTC_H <= 0) 
{
	UTC_H = UTC_H + 12;
	// ^^^ If this happens, AM/PM must change.
	if (UTC_AMPM == "PM") 
	{ 
		UTC_AMPM = "AM";
	}
	else if (UTC_AMPM == "AM") 
	{ 
		UTC_AMPM = "PM";
		// ^^^ If this happens, the day must change.
		if (UTC_D > 0)
		{
			UTC_D = UTC_D - 1;
		} 
		else if (UTC_D == 0)
		{
			UTC_D = 6;
		}
	}
}

/*
	3 - Convert from UTC to chosen time zone.
*/

// Create variables for new time zone.
var TO_H; 		// hour
var TO_M; 		// minute
var TO_S; 		// second
var TO_AMPM;	// AM/PM
var TO_D;		// day

// Define UTC_M as a number.
UTC_M = UTC_M - 0;

// Give the variables apropriate values depending on which
// time zone was chosen.
switch (to) 
{
	case "CDT":
	TO_H = UTC_H + 10;
	TO_M = UTC_M + 30;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "CST":
	TO_H = UTC_H + 9;
	TO_M = UTC_M + 30;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "CXT":
	TO_H = UTC_H + 7;
	TO_M = UTC_M;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "EDT":
	TO_H = UTC_H + 11;
	TO_M = UTC_M;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "EST":
	TO_H = UTC_H + 10;
	TO_M = UTC_M;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "LHDT":
	TO_H = UTC_H + 11;
	TO_M = UTC_M;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "LHST":
	TO_H = UTC_H + 10;
	TO_M = UTC_M + 30;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "NFT":
	TO_H = UTC_H + 11;
	TO_M = UTC_M + 30;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "WDT":
	TO_H = UTC_H + 9;
	TO_M = UTC_M;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
	
	case "WST":
	TO_H = UTC_H + 8;
	TO_M = UTC_M;
	TO_S = UTC_S;
	TO_AMPM = UTC_AMPM;
	TO_D = UTC_D - 0;
	break;
}//switch(to)

// Some of the values may jump too high and not make sense 
// in terms of telling time (eg. 16:89PM).
// So to fix this...
if (TO_M > 59) 
{
	TO_M = TO_M - 60;
	TO_H = TO_H + 1;
}
if (TO_H > 12) 
{
	TO_H = TO_H - 12;
	// ^^^ If this happens, AM/PM must change.
	if (TO_AMPM == "AM") 
	{ 
		TO_AMPM = "PM";
	}
	else if (TO_AMPM == "PM") 
	{ 
		TO_AMPM = "AM";
		// ^^^ If this happens, the day must change.
		if (TO_D < 6)
		{
			TO_D = TO_D + 1;
		} 
		else if (TO_D == 6)
		{
			TO_D = 0;
		}
	}
}
if (TO_H == 12)
{
	if (TO_AMPM == "AM") 
	{ 
		TO_AMPM = "PM";
	}
	else if (TO_AMPM == "PM") 
	{ 
		TO_AMPM = "AM";
		// ^^^ If this happens, the day must change.
		if (TO_D < 6)
		{
			TO_D = TO_D + 1;
			// Define as number.
			TO_D = TO_D - 0;
		} 
		else if (TO_D == 6)
		{
			TO_D = 0;
		}
	}
}

/*
	4 - Prepare the result to be presented to the user.
*/

// Make sure the DAY variable is considered a number (for the next step).
var day = day - 0;
var TO_D = TO_D - 0;
var UTC_D = UTC_D - 0;

// Give the DAY variable a value that is readable.
switch (day) 
{
	case 0:
	day = "Sunday";
	break;
	
	case 1:
	day = "Monday";
	break;
	
	case 2:
	day = "Tuesday";
	break;
	
	case 3:
	day = "Wednesday";
	break;
	
	case 4:
	day = "Thursday";
	break;
	
	case 5:
	day = "Friday";
	break;
	
	case 6:
	day = "Saturday";
	break;
}
// Give the DAY variable a value that is readable.
switch (TO_D) 
{
	case 0:
	TO_D = "Sunday";
	break;
	
	case 1:
	TO_D = "Monday";
	break;
	
	case 2:
	TO_D = "Tuesday";
	break;
	
	case 3:
	TO_D = "Wednesday";
	break;
	
	case 4:
	TO_D = "Thursday";
	break;
	
	case 5:
	TO_D = "Friday";
	break;
	
	case 6:
	TO_D = "Saturday";
	break;
}

// Make sure the minutes are shown as 2 digits (eg. 28, 09, 00)
if (TO_M < 10){ TO_M = "0" + TO_M }

// If the user's HOUR input is 12, it will show as zero in the result.
// To fix this...
hour = hour - 0;
if (hour == 0) { hour = hour + 12; }

/*
	5 - Present the result to the user.
*/

if (from !== "empty" && to !== "empty") 
{
	if (sec < 1)
	{	// Don't show 00 seconds.
		document.getElementById("result").innerHTML =
		"At "+hour+":"+minute+ampm+" "+day+" in "+from+", "+
		"the time in "+to+" will be:<br/>"+
		"<span>"+
		TO_H+":"+TO_M+TO_AMPM+" "+TO_D+
		"</span>";
	}
	else
	{
		document.getElementById("result").innerHTML =
		"At "+hour+":"+minute+":"+sec+ampm+" "+day+" in "+from+", "+
		"the time in "+to+" will be:<br/>"+
		"<span>"+
		TO_H+":"+TO_M+":"+TO_S+TO_AMPM+" "+TO_D+
		"</span>";
	}
}
else
{
	alert("Please select two time zones.");
}

}//convert()

















