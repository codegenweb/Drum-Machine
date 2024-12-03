
// Click

var positionTrack = document.querySelectorAll(".drum-pad").length;

for (i = 0; i < positionTrack; i++) {
  document.querySelectorAll(".drum-pad")[i].addEventListener("click", function () {

    var makeSound = this.innerHTML;
    playAudio(makeSound);
  });
}

// Keybord

document.addEventListener("keypress", function (event) {

  var makeSound = event.key;
  playAudio(makeSound);

});

// PLay

function playAudio(makeSound) {

  switch (makeSound) {
    case "kick":
    case "f":
      var audio = new Audio("sounds/kick.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "snare-1":
    case "d":
      var audio = new Audio("sounds/snare-1.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "snare-2":
    case "s":
      var audio = new Audio("sounds/snare-2.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "clap-1":
    case "r":
      var audio = new Audio("sounds/clap-1.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "clap-2":
    case "e":
      var audio = new Audio("sounds/clap-2.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "hihat-c":
    case "a":
      var audio = new Audio("sounds/hihat-1.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "hihat-o":
    case "q":
      var audio = new Audio("sounds/hihat-2.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "shaker":
    case "w":
      var audio = new Audio("sounds/shaker.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "perc-1":
    case "v":
      var audio = new Audio("sounds/perc-1.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "perc-2":
    case "c":
      var audio = new Audio("sounds/perc-2.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "voc-1":
    case "x":
      var audio = new Audio("sounds/voc-amh.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

    case "voc-2":
    case "z":
      var audio = new Audio("sounds/voc-uup.wav");
      audio.play();
      document.querySelector(".display p").innerHTML = makeSound;
      break;

  }
}
