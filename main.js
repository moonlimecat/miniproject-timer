const timerNum = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const reset = document.querySelector(".reset");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let startTimer = null;

function timer() {
  if (minutes.value == 0 && seconds.value == 0) {
    minutes.value = null;
    seconds.value = null;
  } else if (seconds.value != 0) {
    seconds.value--;
  } else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
  }
}

function stopTimer() {
  clearInterval(startTimer);
}

start.addEventListener("click", function () {
  function startInterval() {
    startTimer = setInterval(function () {
      timer();
    }, 1000);
  }
  startInterval();
});

pause.addEventListener("click", function () {
  if ((timer = true)) {
    timer = false;
    pause.textContent = `Resume`;
  }
});

resume.addEventListener("click", function () {
  startTimer;
});

reset.addEventListener("click", function () {
  minutes.value = null;
  seconds.value = null;
  stopTimer();
});
