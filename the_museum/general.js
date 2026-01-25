
//BG Scroll Code
const bgStars = document.getElementById("bgStars");
const bgStars2 = document.getElementById("bgStars2");

window.addEventListener('scroll', () => {
    const offset = -window.scrollY;
    bgStars2.style.backgroundPositionY = `${offset*0.2}px`;
    bgStars.style.backgroundPositionY = `${offset*0.1}px`;
});

setInterval(moveBG,50);
var interval = 0;

function moveBG() {
    interval += 0.5;
    bgStars2.style.backgroundPositionX = `${interval*2}px`;
    bgStars.style.backgroundPositionX = `${interval}px`;
    console.log(interval);
}