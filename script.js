var tarifPerHour = 10;
var startPlayingTime;
var currentTime;
var timerId = setInterval(getMoney,1000)


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
}

function getMoney(){
	var price = getTime()/3600000*tarifPerHour;
	document.getElementById('result').innerHTML = price.toFixed(2);
	return price;
}

function stopTime(){
	var price = getTime()/3600000*tarifPerHour;
	document.getElementById('result').innerHTML = "К оплате: " + price.toFixed(2) + " руб";
	clearInterval(timerId);
}
