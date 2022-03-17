/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

/* Build Our Functions */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skip() {
  console.log(`Skipping ${this.dataset.skip} seconds`);
  video.currentTime += parseFloat(this.dataset.skip);
}

/* Hook Up Event Listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
