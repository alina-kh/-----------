let timerWrapper = document.getElementById("timer");
let timer = parseInt(timerWrapper.dataset.time);
let startTime = new Date();   //текущее время
let stopTime = startTime.setMinutes(startTime.getMinutes() + timer); //получаем время окончания таймера

// запускаем ежесекундный отсчёт
let countdown = setInterval(function() {
  let now = new Date().getTime();// текущее время
  let remain = stopTime - now; // сколько времени осталось до конца таймера
  
  let min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60) );// переводим миллисекунды в минуты и секунды
  let sec = Math.floor((remain % (1000 * 60)) / 1000 );
  
  sec = sec < 10 ? "0" + sec : sec; // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
  min = min < 10 ? "0" + min : min; // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
  
  timerWrapper.innerHTML = min + " : " + sec; // отправляем значение таймера на страницу в нужный раздел
  
  if (remain < 0) {// если время вышло
    clearInterval(countdown);// останавливаем отсчёт
    window.location.reload();
    }
}, 1000);

function start() {
  window.location.reload();
}