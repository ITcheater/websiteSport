var backgroundVideo = document.getElementById("bg_video");

backgroundVideo.addEventListener('canplaythrough',function () {
    this.play();
});