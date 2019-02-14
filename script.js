var tarifPerHour = 10;
var startPlayingTime;
var currentTime;
var timerId = setInterval(getMoney,1000);

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
	rub = Math.floor(price);
	cop = (price - rub)*100;
	document.getElementById('result').innerHTML = rub + " Руб. " + cop.toFixed(0) + " Коп.";
}

function stopTime(){
	var price = getTime()/3600000*tarifPerHour;
	document.getElementById('result').innerHTML = "К оплате: " + price.toFixed(2) + " руб";
	clearInterval(timerId);
}
