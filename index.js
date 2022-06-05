let numberOfButtons = document.querySelectorAll(".drum").length;

// Click Event
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// Keypress Event
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Make sound
function makeSound(key) {
  let audio = new Audio();
  switch (key) {
    case "w":
      audio = new Audio("tom-1.mp3");
      break;

    case "a":
      audio = new Audio("tom-2.mp3");
      break;

    case "s":
      audio = new Audio("tom-3.mp3");
      break;

    case "d":
      audio = new Audio("tom-4.mp3");
      break;

    case "j":
      audio = new Audio("snare.mp3");
      break;

    case "k":
      audio = new Audio("crash.mp3");
      break;

    case "l":
      audio = new Audio("kick-bass.mp3");
      break;

    default:
  }
  audio.play();
}

// Add button animation
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.toggle("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
