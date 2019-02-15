var tarifPerHour = prompt("Введите тариф в час", 10);
var discount = prompt("Введите скидку", 15);
var pricePerHour = calculateDiscount(tarifPerHour, discount);
var startPlayingTime;
var currentTime;
var timerId;
var price;
var isButtonStop = false;

function calculateDiscount(tarif, disc){
return tarif - (tarif*disc/100);
}

function resetStartTime() { // НАЧАТЬ ИГРУ
	timerId = setInterval(getMoney,1); // счетчик
	isButtonStop = false;
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
	} else {
		document.getElementById('result').innerHTML = "К оплате: " + price.toFixed(2) + " руб";
	}
}