let logoRotateInterval = null;
function testfunction() {
    if (logoRotateInterval) {
        clearInterval(logoRotateInterval);
        logoRotateInterval = null;
        document.documentElement.style.setProperty('--logo-scale-x', 1);
    } else {
        let count = 0;
        logoRotateInterval = setInterval(() => {
            if (count >= Math.PI*40) {
                clearInterval(logoRotateInterval);
                logoRotateInterval = null;
            } else {
                document.documentElement.style.setProperty('--logo-scale-x', Math.cos(count/20));
                count++;
            }
        }, 10);
    }
}

//Slideshow (adapted from w3schools my beloved)
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("slides");
if (n > slides.length) {slideIndex = 1}
else if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "flex";
} 

//Mouse effects
document.getElementById('croissant').addEventListener('click', (event) => {
    let width = 50;

    console.log('croissant clicked');
    const newDiv = document.createElement('div');
    newDiv.style = `position: fixed; width: ${width}px; height: ${width}px; pointer-events: none;`;
    newDiv.style.backgroundImage = 'url("img/choccros1.png")';
    newDiv.style.backgroundSize = 'cover';
    newDiv.style.left = `${event.clientX - width / 2}px`;;
    newDiv.style.top = `${event.clientY - width / 2}px`;
    document.body.appendChild(newDiv);

    fallAndDisappear(newDiv);
});

function fallAndDisappear(div) {
    let count = 0;
    let maxCount = 25;
    let wind = (Math.random() - 0.5) / 2;

    const interval = setInterval(() => {
        if (count >= maxCount) {
            clearInterval(interval);
            document.body.removeChild(div);
        } else {
            div.style.top = `${parseInt(div.style.top) + Math.pow(count / 5, 1.5)}px`;
            div.style.left = `${parseInt(div.style.left) + wind * count}px`;
            div.style.opacity = 1 - count / maxCount;
            count++;
        }
    }, 10);
}

//Roblox API call
/*const apiUrl = "https://thumbnails.roblox.com/v1/users/avatar?userIds=5765982&size=420x420&format=Png&isCircular=false";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.data && data.data.length > 0) {
            // Extract the imageUrl from the API response
            const imageUrl = data.data[0].imageUrl;

            // Set the src attribute of the <img> tag
            document.getElementById('robloxAvatar').src = imageUrl;
        } else {
            console.error('No image data found.');
        }
    })
    .catch(error => console.error('Error fetching avatar:', error));*/