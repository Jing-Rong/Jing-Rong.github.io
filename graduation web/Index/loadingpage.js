// LOADING SCREEN

const progressBar = document.getElementById("progress-bar");
const counter = document.getElementById("progress-counter");
const loadingScreen = document.getElementById("loading-screen");
const heroSection = document.querySelector(".hero");

// const leaf1 = document.querySelector(".leaf1");
// const leaf2 = document.querySelector(".leaf2");
// const leaf3 = document.querySelector(".leaf3");

function updateProgress(progress) {
  progressBar.style.width = `${progress}%`;
  counter.textContent = `${progress}%`;
}

// const progressBarWidth = progressBar.offsetWidth;
//   leaf1.style.left = `${progressBarWidth * 1.2}px`;
//   leaf2.style.left = `${progressBarWidth * 0.6}px`;
//   leaf3.style.left = `${progressBarWidth * 1}px`;
// function updateProgress(progress) {
//   const position = 100 - progress * 5; // 計算背景圖片位置
//   progressBar.style.backgroundPosition = `0%${position}%`; // 更新背景圖片位置
//   counter.textContent = `${progress}%`;
// }

updateProgress(0);
document.body.style.overflow = "hidden";

document.addEventListener("DOMContentLoaded", () => {
  let progress = 0;
  const increment = 5;

  const updateLoop = setInterval(() => {
    if (progress >= 100) {
      clearInterval(updateLoop);
      setTimeout(() => {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.height = "0";
        heroSection.style.opacity = "1";
        setTimeout(() => {
          window.addEventListener("wheel", handleScroll);
          document.body.style.overflowY = "scroll";
        }, 700);
      }, 0);
    }
    updateProgress(progress);
    progress += increment;
  }, 100);
});

// SITENAME ABSOLUTE POSITIONING TO RELATIVE POSITIONING

window.addEventListener("scroll", () => {
  const part1 = document.querySelector(".part1");
  const sitename = document.querySelector(".sitename");
  const spacer = document.querySelector(".spacer");

  const part1Top = part1.getBoundingClientRect().top;
  // const sitenameHeight = sitename.offsetHeight;

  // const scrollThreshold = part1.offsetTop - sitenameHeight;

  // if (part1Top <= 0) {
  //   sitename.classList.add("relative");
  //   spacer.classList.add("absolute");
  // } else {
  //   sitename.classList.remove("relative");
  //   spacer.classList.remove("absolute");
  // }
});

// HUGE TEXTS TRANSITIONING UPWARDS

window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fadein");
  elements.forEach((element) => {
    if (isElementInMiddleViewport(element)) {
      element.style.opacity = "1";
      element.classList.add("move-up");
    }
  });
});

function isElementInMiddleViewport(element) {
  const rect = element.getBoundingClientRect();
  const elementMiddle = rect.top + rect.height / 2;
  return elementMiddle >= 0 && elementMiddle <= window.innerHeight;
}
function handleScroll(event) {
  event.preventDefault();

  const deltaY = event.deltaY;
  const deltaX = event.deltaX;

  if (deltaY !== 0) {
    const scrollAmount = deltaY * 5;

    // gsap.to(window, {
    //   scrollTo: {
    //     y: "+=" + scrollAmount,
    //     autoKill: false,
    //   },
    //   duration: 1,
    //   ease: "power2.out",
    // });
  }
}
