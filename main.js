const timerNum = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const reset = document.querySelector(".reset");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let intervalId = null;

function startTimer() {
  if (intervalId) return;
}

function stopTimer() {
  clearInterval(intervalId);
}

function inputLenFunc() {
  if (minutes.value.length > 2 || seconds.value.length > 2) {
    minutes.value = minutes.value.slice(0, 2);
    seconds.value = seconds.value.slice(0, 2);
  }
}

function nullValue() {
  minutes.value = null;
  seconds.value = null;
}

function minMaxNum() {
  if (
    minutes.value > 60 ||
    minutes.value < 0 ||
    seconds.value < 0 ||
    seconds.value > 60
  ) {
    nullValue();
    stopTimer();
    startTimer();
  }
}

function displayNum() {
  if (minutes.value < 10 || seconds.value < 10) {
    minutes.value = minutes.value.toString().padStart("2", 0);
    seconds.value = seconds.value.toString().padStart("2", 0);
  }
}

function timer() {
  if (minutes.value == 0 && seconds.value == 0) {
    stopTimer();
    nullValue();
  } else if (seconds.value > 0) {
    seconds.value--;
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
  }
  inputLenFunc();
  minMaxNum();
  displayNum();
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
  nullValue();
  stopTimer();
  startTimer();
});
