let currentSlideID = 1;

slider = document.getElementById("slider");

totalSlide = slider.childElementCount;

function prev() {
  if (currentSlideID > 1) {
    currentSlideID--;
  }
  console.log("prev-", currentSlideID);
  showSlide();
}
function nxt() {
  if (currentSlideID < totalSlide) {
    currentSlideID++;
    showSlide();
    console.log("current-", currentSlideID);
  }
}
function showSlide() {
  slides = slider.getElementsByTagName("li");

  console.log(slides);

  for (let index = 0; index < totalSlide; index++) {
    const element = slides[index];

    if (currentSlideID === index + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}
