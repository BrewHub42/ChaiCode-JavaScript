/**
 * Write your challenge solution here
 */


const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const digitalClock = document.querySelector('.digital-clock');
const currentDate = document.querySelector('.date');

function formatDigit(entity) {
    if (entity < 10) {
        return `0${entity}`;
    }
    return entity;
}

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

function updateDigitalClock() {
    let time = new Date();

    let hours = time.getHours() % 12 || 12;
    let minutes = formatDigit(time.getMinutes());
    let seconds = formatDigit(time.getSeconds());
    let ampm = time.getHours() >= 12 ? 'PM' : 'AM';

    digitalClock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`; 

    // let secondsRotation = 6 * seconds;
    // let minutesRotation = 6 * minutes +  seconds / 10;
    // let hoursRotation = 30 * hours +  minutes / 2 + seconds / 120;

    // hourHand.style.transform = `rotate(${hoursRotation}deg)`;
    // minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
    // secondHand.style.transform = `rotate(${secondsRotation}deg)`;

    currentDate.textContent = time.toLocaleDateString(undefined, options);
}

function createHoursNumber() {
    const numbers = document.querySelector(".number");
    const radius = 117;

    for (let i = 1; i <= 12; i++) {
        const numberElement = document.createElement('span');
        numberElement.innerText = i;
        numberElement.classList.add('number');

        const angle = (i * 30) * (Math.PI / 180);
        const x = Math.cos(angle - Math.PI / 2) * radius;
        const y = Math.sin(angle - Math.PI / 2) * radius;

        numberElement.style.position = "absolute";
        numberElement.style.left = `calc(50% + ${x}px)`;
        numberElement.style.top = `calc(50% + ${y}px)`;
        numberElement.style.transform = "translate(-50%, -12%)";

        numbers.appendChild(numberElement);
    }
}


function updateClockMotion() {
    let now = new Date(); 
    let hours = now.getHours() % 12;  
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds(); 

    let secondsRotation = 6 * seconds + (6 * milliseconds) / 1000; 
    let minutesRotation = 6 * minutes + seconds / 10; 
    let hoursRotation = 30 * hours + minutes / 2 + seconds / 120;

    secondHand.style.transform = `rotate(${secondsRotation}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
    hourHand.style.transform = `rotate(${hoursRotation}deg)`;

    requestAnimationFrame(updateClockMotion); 
}


createHoursNumber();

updateClockMotion();

setInterval(updateDigitalClock, 1000);

updateDigitalClock();

