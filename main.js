const timerNum = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const reset = document.querySelector(".reset");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let intervalId = null;

function timer() {
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.value = null;
    seconds.value = null;
  } else if (seconds.value > 0) {
    seconds.value--;
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
  }
  if (minutes.value < 10 || seconds.value < 10) {
    minutes.value = minutes.value.toString().padStart("2", 0);
    seconds.value = seconds.value.toString().padStart("2", 0);
  }
}

function startTimer() {
  if (intervalId) return;
}

function stopTimer() {
  clearInterval(intervalId);
}

start.addEventListener("click", function () {
  startTimer();
  intervalId = setInterval(timer, 1000);
});

pause.addEventListener("click", function () {
  stopTimer();
  startTimer();
});

reset.addEventListener("click", function () {
  minutes.value = null;
  seconds.value = null;
  stopTimer();
  startTimer();
});
