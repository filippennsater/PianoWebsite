const A1 = new Audio("assets/piano-A-1.mp3");
const A2 = new Audio("assets/piano-A-2.mp3");
const A3 = new Audio("assets/piano-A-3.mp3");
const A4 = new Audio("assets/piano-A-4.mp3");
const A5 = new Audio("assets/piano-A-5.mp3");
const A6 = new Audio("assets/piano-A-6.mp3");
const A7 = new Audio("assets/piano-A-7.mp3");
const A8 = new Audio("assets/piano-A-8.mp3");
const A9 = new Audio("assets/piano-A-9.mp3");
const A10 = new Audio("assets/piano-A-10.mp3");
const A11 = new Audio("assets/piano-A-11.mp3");
const A12 = new Audio("assets/piano-A-12.mp3");

function playSound(tone) {

    switch (tone) {
        case 1:
            A1.currentTime = 0;
            A1.play();
            break;
        case 2:
            A2.currentTime = 0;
            A2.play();
            break;
        case 3:
            A3.currentTime = 0;
            A3.play();
            break;
        case 4:
            A4.currentTime = 0;
            A4.play();
            break;
        case 5:
            A5.currentTime = 0;
            A5.play();
            break;
        case 6:
            A6.currentTime = 0;
            A6.play();
            break;
        case 7:
            A7.currentTime = 0;
            A7.play();
            break;
        case 8:
            A8.currentTime = 0;
            A8.play();
            break;
        case 9:
            A9.currentTime = 0;
            A9.play();
            break;
        case 10:
            A10.currentTime = 0;
            A10.play();
            break;
        case 11:
            A11.currentTime = 0;
            A11.play();
            break;
        case 12:
            A12.currentTime = 0;
            A12.play();
            break;
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }