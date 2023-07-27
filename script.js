const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');

function playpause() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
function stopvideo() {
    video.currentTime = 0;
    video.pause(); 
}
function updateIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        play.innerHTML = '<i class="fa-solid fa-stop"></i>'
    }
}
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // get minutes 
    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10) {
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if(minutes < 10) {
        minutes = '0' + String(seconds);
    }
   timeStamp.innerHTML = `${minutes}:${seconds}`;
}
function setProgress() {
    video.currentTime = (+progress.value * video.duration)/ 100;
}
video.addEventListener('click', playpause);
video.addEventListener('play',updateIcon);
video.addEventListener('click' ,updateIcon);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click',playpause);
stop.addEventListener('click',stopvideo);
progress.addEventListener('click',setProgress);