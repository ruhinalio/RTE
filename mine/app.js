const video = document.querySelector(".video");
const timeLine = document.querySelector(".time-line");
const time = document.querySelector(".time");
const startStop = document.querySelector(".change-button");
const secondary = document.querySelectorAll("[data-skip]");

function starting() {
  if (video.paused || video.ended) {
    video.play();
    startStop.innerHTML = "||";
  } else {
    video.pause();
    startStop.innerHTML = "►";
  }
}

startStop.addEventListener("click", starting);

function second() {
    video.currentTime += Number(this.dataset.skip);
  }
  
  secondary.forEach(btn => {
    btn.addEventListener("click", second)
  })




















document.addEventListener("keydown", (e) => {
    e.code === "Space" && starting();
  });
  