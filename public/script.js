const A1min = new Audio("assets/piano-A-m1.mp3");
const A2min = new Audio("assets/piano-A-m2.mp3");
const A3min = new Audio("assets/piano-A-m3.mp3");
const A4min = new Audio("assets/piano-A-m4.mp3");
const A5min = new Audio("assets/piano-A-m5.mp3");
const A6min = new Audio("assets/piano-A-m6.mp3");
const A7min = new Audio("assets/piano-A-m7.mp3");
const A8min = new Audio("assets/piano-A-m8.mp3");
const A9min = new Audio("assets/piano-A-m9.mp3");
const A10min = new Audio("assets/piano-A-m10.mp3");
const A11min = new Audio("assets/piano-A-m11.mp3");
const A12min = new Audio("assets/piano-A-m12.mp3");

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

const A1p = new Audio("assets/piano-A-p1.mp3");
const A2p = new Audio("assets/piano-A-p2.mp3");
const A3p = new Audio("assets/piano-A-p3.mp3");
const A4p = new Audio("assets/piano-A-p4.mp3");
const A5p = new Audio("assets/piano-A-p5.mp3");
const A6p = new Audio("assets/piano-A-p6.mp3");
const A7p = new Audio("assets/piano-A-p7.mp3");
const A8p = new Audio("assets/piano-A-p8.mp3");
const A9p = new Audio("assets/piano-A-p9.mp3");
const A10p = new Audio("assets/piano-A-p10.mp3");
const A11p = new Audio("assets/piano-A-p11.mp3");
const A12p = new Audio("assets/piano-A-p12.mp3");

function playSound(tone) {

    switch (tone) {
        case -1:
            A1min.currentTime = 0;
            A1min.play();
            break;
        case -2:
            A2min.currentTime = 0;
            A2min.play();
            break;
        case -3:
            A3min.currentTime = 0;
            A3min.play();
            break;
        case -4:
            A4min.currentTime = 0;
            A4min.play();
            break;
        case -5:
            A5min.currentTime = 0;
            A5min.play();
            break;
        case -6:
            A6min.currentTime = 0;
            A6min.play();
            break;
        case -7:
            A7min.currentTime = 0;
            A7min.play();
            break;
        case -8:
            A8min.currentTime = 0;
            A8min.play();
            break;
        case -9:
            A9min.currentTime = 0;
            A9min.play();
            break;
        case -10:
            A10min.currentTime = 0;
            A10min.play();
            break;
        case -11:
            A11min.currentTime = 0;
            A11min.play();
            break;
        case -12:
            A12min.currentTime = 0;
            A12min.play();
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
                A1p.currentTime = 0;
                A1p.play();
                break;
            case 200:
                A2p.currentTime = 0;
                A2p.play();
                break;
            case 300:
                A3p.currentTime = 0;
                A3p.play();
                break;
            case 400:
                A4p.currentTime = 0;
                A4p.play();
                break;
            case 500:
                A5p.currentTime = 0;
                A5p.play();
                break;
            case 600:
                A6p.currentTime = 0;
                A6p.play();
                break;
            case 700:
                A7p.currentTime = 0;
                A7p.play();
                break;
            case 800:
                A8p.currentTime = 0;
                A8p.play();
                break;
            case 900:
                A9p.currentTime = 0;
                A9p.play();
                break;
            case 1000:
                A10p.currentTime = 0;
                A10p.play();
                break;
            case 1100:
                A11p.currentTime = 0;
                A11p.play();
                break;
            case 1200:
                A12p.currentTime = 0;
                A12p.play();
                break;
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }