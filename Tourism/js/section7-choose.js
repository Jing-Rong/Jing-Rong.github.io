document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript file loaded");
});

const track = document.querySelector(".cardtrack");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
// const width = window.innerWidth;
let width = window.innerWidth;
let index = 0;

const updateWidth = () => {
  width = window.innerWidth;
};

window.addEventListener("resize", updateWidth);

nextButton.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  const itemWidth = items[0].getBoundingClientRect().width;
  //   console.log(`items.length: ${items.length}, index: ${index}`);
  if (
    (index < items.length - 5 && width >= 1200) ||
    (index < items.length - 4 && width < 1200 && width >= 960) ||
    (index < items.length - 3 && width < 960 && width >= 768)
  ) {
    index++;
    track.style.transform = `translateX(-${itemWidth * index + 24 * index}px)`;
    //   } else if (index < items.length - 4 && width < 1200 && width >= 960) {
    //     index++;
    //     track.style.transform = `translateX(-${itemWidth * index + 24 * index}px)`;
    //   } else {
  }
});

prevButton.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  const itemWidth = items[0].getBoundingClientRect().width;
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${itemWidth * index + 24 * index}px)`;
  }
});
