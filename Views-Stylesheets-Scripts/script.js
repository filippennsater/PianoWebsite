const A1min = new Audio("assets/piano-A-1.mp3");
const A2min = new Audio("assets/piano-A-2.mp3");
const A3min = new Audio("assets/piano-A-3.mp3");
const A4min = new Audio("assets/piano-A-4.mp3");
const A5min = new Audio("assets/piano-A-5.mp3");
const A6min = new Audio("assets/piano-A-6.mp3");
const A7min = new Audio("assets/piano-A-7.mp3");
const A8min = new Audio("assets/piano-A-8.mp3");
const A9min = new Audio("assets/piano-A-9.mp3");
const A10min = new Audio("assets/piano-A-10.mp3");
const A11min = new Audio("assets/piano-A-11.mp3");
const A12min = new Audio("assets/piano-A-12.mp3");

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

const A1plus = new Audio("assets/piano-A-1.mp3");
const A2plus = new Audio("assets/piano-A-2.mp3");
const A3plus = new Audio("assets/piano-A-3.mp3");
const A4plus = new Audio("assets/piano-A-4.mp3");
const A5plus = new Audio("assets/piano-A-5.mp3");
const A6plus = new Audio("assets/piano-A-6.mp3");
const A7plus = new Audio("assets/piano-A-7.mp3");
const A8plus = new Audio("assets/piano-A-8.mp3");
const A9plus = new Audio("assets/piano-A-9.mp3");
const A10plus = new Audio("assets/piano-A-10.mp3");
const A11plus = new Audio("assets/piano-A-11.mp3");
const A12plus = new Audio("assets/piano-A-12.mp3");

function playSound(tone) {

    switch (tone) {
        case -1:
            A1min.currentTime = 0;
            A1min.play();
            break;
        case -2:
            A2.currentTime = 0;
            A2.play();
            break;
        case -3:
            A3.currentTime = 0;
            A3.play();
            break;
        case -4:
            A4.currentTime = 0;
            A4.play();
            break;
        case -5:
            A5.currentTime = 0;
            A5.play();
            break;
        case -6:
            A6.currentTime = 0;
            A6.play();
            break;
        case -7:
            A7.currentTime = 0;
            A7.play();
            break;
        case -8:
            A8.currentTime = 0;
            A8.play();
            break;
        case -9:
            A9.currentTime = 0;
            A9.play();
            break;
        case -10:
            A10.currentTime = 0;
            A10.play();
            break;
        case -11:
            A11.currentTime = 0;
            A11.play();
            break;
        case -12:
            A12.currentTime = 0;
            A12.play();
            break;


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

            case 100:
                A1.currentTime = 0;
                A1.play();
                break;
            case 200:
                A2.currentTime = 0;
                A2.play();
                break;
            case 300:
                A3.currentTime = 0;
                A3.play();
                break;
            case 400:
                A4.currentTime = 0;
                A4.play();
                break;
            case 500:
                A5.currentTime = 0;
                A5.play();
                break;
            case 600:
                A6.currentTime = 0;
                A6.play();
                break;
            case 700:
                A7.currentTime = 0;
                A7.play();
                break;
            case 800:
                A8.currentTime = 0;
                A8.play();
                break;
            case 900:
                A9.currentTime = 0;
                A9.play();
                break;
            case 100:
                A10.currentTime = 0;
                A10.play();
                break;
            case 1100:
                A11.currentTime = 0;
                A11.play();
                break;
            case 1200:
                A12plus.currentTime = 0;
                A12plus.play();
                break;
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var element = document.h2;
    element.classList.toggle("h2-dark-mode");
  }