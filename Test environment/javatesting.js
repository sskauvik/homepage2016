
// example
// 
/*
var batwing = {
	status: "Ready",
	RescueBatmat: function() {
		document.write("Loading his transponder... initiating launch ...");
	}	
}

if (batwing.status === "Ready") {
	batwing.RescueBatman();
}

var utilities = {
	printAllMembers: function(targetObject) {
		for (i in targetObject) {
			document.write("<br />" + targetObject[i]);
		}
	}
}

utilities.printAllMembers(batwing);

*/
/*
window.onload = function() {
var clickMeButton = document.getElementById('ClickMe');
ClickMeButton.onclick = runTheExample;
}
*/

window.onload = function() {

document.getElementById("ClickMe").onclick = runTheExample;

function runTheExample () {
alert("running the example");
	}
}

/* ARRAY METHOD.1. 
var candidates = [];
candidates[0] = "Sigurd";
candidates[1] = "Grete";
candidates[2] = "Ninni";
candidates[3] = "Per";

alert("Sigurd chooses: " + candidates[1]);
*/

/* ARRAY METHOD.2.
var candidates = ["Sigurd", "Grete", "Ninni", "Per"];
alert("Sigurd chooses: " + candidates[1]);
*/


var flightDate = new Date("september 22, 2014");
var myValues = ["Oceanic", 815, flightDate];

	for (i in myValues)
	{
		document.write("<br />" + myValues[i]);
	}
	document.write("<br />");
document.write("Hello!");