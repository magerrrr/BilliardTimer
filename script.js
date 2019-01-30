var tarifPerHour = 10;
var startPlayingTime;
var currentTime;


function resetStartTime() {
	startPlayingTime = new Date();
	return startPlayingTime.getTime();
}

function getCurrentTime(){
	currentTime = new Date();
	return currentTime.getTime();
}

function getTime(){
	var a = getCurrentTime() - startPlayingTime;
	return a;
	//document.getElementById("demo").InnerHTML =;
}

function getMoney(){
	var m = getTime()/3600000*tarifPerHour;
	return m;
}











