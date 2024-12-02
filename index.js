
// Click

var numberOfButtons = document.querySelectorAll(".drum-pad").length;

for (i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum-pad")[i].addEventListener("click", function () {

    var trackBtn = this.innerHTML;
    makeSound(trackBtn);
    
  });
}

// Key

document.addEventListener("keypress", function (event) {

  var trackBtn = event.key;
  makeSound(trackBtn);

})

function makeSound(trackB) {
  switch (trackB) {
    case "Kick":
    case "f":
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      document.querySelector(".display").innerHTML = "KICK";
      break;

    case "Snare-1":
    case "d":
      var snare1 = new Audio("sounds/snare-1.wav");
      snare1.play();
      document.querySelector(".display").innerHTML = "SNARE-1";
      break;

    case "Snare-2":
    case "s":
      var snare2 = new Audio("sounds/snare-2.wav");
      snare2.play();
      document.querySelector(".display").innerHTML = "SNARE-2";
      break;

    case "Hat-C":
    case "x":
      var hatC = new Audio("sounds/hihat-cl.wav");
      hatC.play();
      document.querySelector(".display").innerHTML = "HAT-C";
      break;

    case "Hat-O":
    case "z":
      var hatO = new Audio("sounds/hihat-op.wav");
      hatO.play();
      document.querySelector(".display").innerHTML = "HAT-O";
      break;

    case "Clap-1":
    case "w":
      var clap1 = new Audio("sounds/clap-1.wav");
      clap1.play();
      document.querySelector(".display").innerHTML = "CLAP-1";
      break;

    case "Clap-2":
    case "q":
      var clap2 = new Audio("sounds/clap-2.wav");
      clap2.play();
      document.querySelector(".display").innerHTML = "CLAP-2";
      break;

    case "Shaker":
    case "a":
      var shake = new Audio("sounds/shaker.wav");
      shake.play();
      document.querySelector(".display").innerHTML = "SHAKER";
      break;

    case "Perc-1":
    case "r":
      var perc1 = new Audio("sounds/perc-1.wav");
      perc1.play();
      document.querySelector(".display").innerHTML = "PERC-1";
      break;

    case "Perc-2":
    case "e":
      var perc2 = new Audio("sounds/perc-2.wav");
      perc2.play();
      document.querySelector(".display").innerHTML = "PERC-2";
      break;

    case "Voc-1":
    case "v":
      var voc1 = new Audio("sounds/voc-amh.wav");
      voc1.play();
      document.querySelector(".display").innerHTML = "VOC-MMH";
      break;

    case "Voc-2":
    case "c":
      var voc2 = new Audio("sounds/voc-uup.wav");
      voc2.play();
      document.querySelector(".display").innerHTML = "VOC-UUP";
      break;

    default:
      break;

  }


}
