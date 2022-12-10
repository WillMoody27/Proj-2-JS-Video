const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// Playback Button Options
const playbackContainer = document.querySelector(".playback-container");
const playbackOption = document.querySelectorAll(".video-playback-option");

// Control Playback Rate
switchBtn.addEventListener("click", () => {
  if (!switchBtn.classList.contains("slide")) {
    // Container will move left then stop video
    switchBtn.classList.add("slide");
    video.pause();
  } else {
    switchBtn.classList.remove("slide");
    video.play();
  }
});

//  Click Eventlisteners for Playback Options
playbackOption.forEach((option) => {
  option.addEventListener("click", (speed) => {
    optionSelection(speed);
  });
});

// Speed Option Selection Function
let optionSelection = (selection) => {
  let optionSelect = selection.currentTarget.dataset.id;
  console.log(optionSelect);
  switch (optionSelect) {
    case "option-1":
      video.playbackRate = 0.5;
      playbackSpeedDisplay(video.playbackRate);
      break;
    case "option-2":
      video.playbackRate = 1.0;
      playbackSpeedDisplay(video.playbackRate);
      break;
    case "option-3":
      video.playbackRate = 3.0;
      playbackSpeedDisplay(video.playbackRate);
      break;
    case "option-4":
      video.playbackRate = 6.0;
      playbackSpeedDisplay(video.playbackRate);
      break;
  }
};

let playbackSpeedDisplay = (playbackSpeed) => {
  let speedDisplay = document.querySelector(".speed-display-container");
  speedDisplay.textContent = `Speed: ${playbackSpeed}x`;
  return speedDisplay;
};
