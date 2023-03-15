// var audio = new Audio('sound.mp3');
// audio.play();

var audio = document.createElement('Audio');
audio.setAttribute('src', 'sound.mp3');
console.log("hekafd");
audio.loop = true;
audio.play();