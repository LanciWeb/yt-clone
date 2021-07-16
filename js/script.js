var player = document.getElementById('player-iframe');
var thumbnails = document.getElementsByClassName('video-thumbnail');

for (var i = 0; i < thumbnails.length; i++) {
  currentThumbnail = thumbnails[i];
  currentThumbnail.addEventListener('click', setVideo);
}

function setVideo() {
  console.log(this);
  var videoSrc = this.dataset.src;
  console.log(videoSrc);
  player.setAttribute('src', videoSrc);
}
