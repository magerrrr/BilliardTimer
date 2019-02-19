//TO DO: user can see a week day
//TO DO: user can see tarif
//TO DO: user can see discount
//TO DO: flexible site

var tarifPerHour;
var discount = 15;
var pricePerHour;
var startPlayingTime;
var currentTime;
var timerId;
var timerTime;
var price;
var isButtonStop = false;
var test;

function calculateDiscount(tarif, disc){
return tarif - (tarif*disc/100);
}

function resetStartTime() { // НАЧАТЬ ИГРУ

	timerId = setInterval(getMoney,1000); // счетчик
	isButtonStop = false;
	startPlayingTime = new Date();
	getCurrentTarif();
	pricePerHour = calculateDiscount(tarifPerHour, discount);
	
	timerTime = setInterval("displayPlayingTime(getTime())",1000);
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
	var price = getTime()/3600000*pricePerHour;
	rub = Math.floor(price);
	cop = (price - rub)*100;
	document.getElementById('result').innerHTML = rub + " Руб. " + cop.toFixed(0) + " Коп.";
}

function stopTime(){
	if(!isButtonStop){
		isButtonStop = true;
		price = getTime()/3600000*pricePerHour;
		document.getElementById('result').innerHTML = "К оплате: " + price.toFixed(2) + " руб";
		clearInterval(timerId); // сброс счетчика
		clearInterval(timerTime);
	} else {
		document.getElementById('result').innerHTML = "К оплате: " + price.toFixed(2) + " руб";
	}
}

function getCurrentTarif(){
	var currentDay = startPlayingTime.getDay();
	var currentHourOfDay = startPlayingTime.getHours();

	switch (currentDay) {
  		case 0: 
  		if (currentHourOfDay < 7) {
  				tarifPerHour = 12;
				} else {
			  	tarifPerHour = 11;
			}
	  		break;
  		case 1:
  		case 2:
  		case 3:
  		case 4:
  			tarifPerHour = 11;
  			break; 
  		case 5:
  			if (currentHourOfDay < 7) {
  				tarifPerHour = 11;
				} else {
			  	tarifPerHour = 12;
			}
	  		break;
  		case 6:
		    tarifPerHour = 12;
		    break;
	}
}

function displayPlayingTime(millisec) {
        let totalSeconds = Math.floor(millisec/1000);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = totalSeconds % 60;

		minutes = String(minutes).padStart(2, "0");
		hours = String(hours).padStart(2, "0");
		seconds = String(seconds).padStart(2, "0");
        document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
    }