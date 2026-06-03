
//Semantic Cluster Code

function supplemental_trigger(selection) {
    switch(selection) {
      case 'A':
        document.getElementById("cluster_display").textContent = "Source: 113 Minor Spiral Arm Outer 32.";
        break;
      case 'B':
        document.getElementById("cluster_display").textContent = "Detection Method: Radio Signal.";
        break;
      case 'C':
        document.getElementById("cluster_display").textContent = "Detection Notes: Multiple radio signals intercepted from source. All have p <0.01 for intelligent design. All appear deliberate. No acknowledgement of Concealment in messaging. No coordination in messaging.";
        break;
      case 'D':
        document.getElementById("cluster_display").textContent = "p: <0.01";
        break;
      case 'E':
        document.getElementById("cluster_display").textContent = "Risk of Outside Detection: Yes.";
        break;
      case 'F':
        document.getElementById("cluster_display").textContent = "Risk of Outside Detection Notes: Signals are broadcast in all directions. [---] likely sending probe in 30 cycles. Others to follow.";
        break;
      case 'G':
        document.getElementById("cluster_display").textContent = "Protection Measures: Not advised.";
        break;
      case 'H':
        document.getElementById("cluster_display").textContent = "Protection Measures Notes: No useful offerings in signals. Source harbors carbon lifeforms similar to other protected species. Primitive sciences. Primitive arts. Id engagers.";
        break;
      case 'I':
        document.getElementById("cluster_display").textContent = "Threat Type: None. Minor Type 3 War Variance.";
        break;
      case 'J':
        document.getElementById("cluster_display").textContent = "Preservation Measures: None.";
        break;
      case 'K':
        document.getElementById("cluster_display").textContent = "Preservation Measures Notes: Nothing to be gained from our preservation efforts. Let The Museum handle it.";
        break;
      default:
        console.log("NOOOOOOOOOOOO");
        break;
    }
}

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

//startup animation

const textToAppear = Array.from(document.getElementsByClassName("dos_text"));

textToAppear.forEach(line => {
  line.style.opacity = 0;
});

setTimeout(() => {
  textToAppear.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = 1;
      if (line.classList.contains("dos_input"))
      {
        const tc = line.textContent;
        line.textContent = "";
        [...tc].forEach(char => {
        const span = document.createElement("span");
        span.style.opacity = 0;
        span.textContent = char;
        line.appendChild(span);

        const spans = line.querySelectorAll("span");

        spans.forEach((span, i) => {
          setTimeout(() => {
            span.style.opacity = 1;
          }, i * 20);
        });
    });
      }
    }, i * 750);
  }); 
}, 1000);