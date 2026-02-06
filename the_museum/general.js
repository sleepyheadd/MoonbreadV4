
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
    if (interval >= 256) {
        interval = 0;
    }
}

//Message Time Handler
const startTime = new Date("2082-02-25T09:05:00");

let currentTime = new Date(startTime);

document.querySelectorAll(".message_box").forEach(msg => {
    const offset = Number(msg.dataset.minutes || 0);

    currentTime.setMinutes(currentTime.getMinutes() + offset);

    const timeElapsed = msg.querySelector(".date");
    timeElapsed.textContent = currentTime.toLocaleTimeString([], {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12:false
    });
});

//typewriter logic
document.querySelectorAll(".typewriter").forEach(el => {
  const text = el.textContent;
  el.textContent = "";

  //creates a span for each character so it can be shown individually
  [...text].forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    el.appendChild(span);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const spans = entry.target.querySelectorAll("span");

      spans.forEach((span, i) => {
        setTimeout(() => {
          span.style.opacity = 1;
        }, i * 40);
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".typewriter").forEach(el => observer.observe(el));