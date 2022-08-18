let video = document.querySelector("video");
let playBtn = document.querySelector("span");

window.addEventListener("scroll", function () {
  let value = 1 + window.scrollY / -800;
  video.style.opacity = value;
});

playBtn.addEventListener("click", myFunction);

function videoVolume () {
    if(video.play()) {
        video.muted = false;
    }
}

videoVolume();

function myFunction() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = "Pause";
    playBtn.classList.add('pause');
  } else {
    video.pause();
    playBtn.innerHTML = "Play";
  } 
}
