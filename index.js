// function Carousel(btn) {
let currenSlideId = 0;

sliderElement = document.getElementById("slider");

totalSlides = sliderElement.childElementCount;
console.log(totalSlides);

//   if (btn === "left") {
// }

//   } else if (btn === "right") {

function showSlide() {
  slides = document.getElementById("slider").getElementsByTagName("li");
  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];

    console.log("index", index);
    console.log("slide id", currenSlideId);
    if (currenSlideId == index + 1) {
      element.classList.remove("hidden");
      console.log("executed!");
    } else {
      element.classList.add("hidden");
    }
  }
}
function nxt() {
  if (currenSlideId < totalSlides) {
    currenSlideId++;
    console.log("nxt", currenSlideId);
    showSlide();
  }
}
function prev() {
  if (currenSlideId > 1) {
    currenSlideId--;
    console.log("prev", currenSlideId);
    showSlide();
  }

  //   }
}
