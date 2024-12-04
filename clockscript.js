setInterval(setClock,100);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const timePrint = document.querySelector('[data-time-print]');
const clockInput = document.getElementById('clockPowerRange');

var clockPower = 2;
var modifierConstant = 360 / Math.pow(12, clockPower);

var clockNums = {
    1: document.getElementsByClassName('number1'),
    2: document.getElementsByClassName('number2'),
    3: document.getElementsByClassName('number3'),
    4: document.getElementsByClassName('number4'),
    5: document.getElementsByClassName('number5'),
    6: document.getElementsByClassName('number6'),
    7: document.getElementsByClassName('number7'),
    8: document.getElementsByClassName('number8'),
    9: document.getElementsByClassName('number9'),
    10: document.getElementsByClassName('number10'),
    11: document.getElementsByClassName('number11'),
    12: document.getElementsByClassName('number12')
}

function setClock() {
    var inputRounded = Math.round(clockInput.value/5);
    clockPower = inputRounded / 20;
    modifierConstant = 360 / Math.pow(12, clockPower);

    const currentDate = new Date();

    var tOD = "AM";
    if (currentDate.getHours() > 12) {
        tOD = "PM"
    }

    timePrint.textContent = (currentDate.getHours() % 12 || 12).toString().padStart(2, '0')
        + ":" + currentDate.getMinutes().toString().padStart(2, '0')
        + ":" + currentDate.getSeconds().toString().padStart(2, '0') + " " + tOD
        + ", angles modeled by "+ Math.round(modifierConstant*100)/100 + "*x^" + clockPower;

    const curSeconds = currentDate.getSeconds() + currentDate.getMilliseconds() / 1000;
    const curMinutes = curSeconds / 60 + currentDate.getMinutes();
    const curHours = curMinutes / 60 + (currentDate.getHours() % 12);

    const secondsRatio = modifierConstant * Math.pow(curSeconds / 5, clockPower);
    const minutesRatio = modifierConstant * Math.pow(curMinutes / 5, clockPower);
    const hoursRatio = modifierConstant * Math.pow(curHours, clockPower);

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

    var start = 10;
    for (let i = 1; i <= 12; i++) {
        clockNums[i][0].style.transform = "rotate(" + modifierConstant * Math.pow(i, clockPower) + "deg)";
        clockNums[i][0].style.fontSize = (start + i*(clockPower-1)) + 'px';
    }
    clockNums[12][0].style.fontSize = start + 'px';
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio);
}

setClock();