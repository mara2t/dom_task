const slides = document.querySelectorAll("img");

let index = 1;
//slides[1].style.display = 'block'
displaySlide();
function displaySlide  () {
  if (index > slides.length) {
    index = 1;
  }
  if (index < 1) {
    index = slides.length;
  }

  for (let pic of slides) {
    pic.style.display = "none";
  }
  slides[index - 1].style.display = "block";
};

const previousSlide = function () {
  index -= 1;
  displaySlide();
};
const nextSlide = function () {
  index += 1;
  displaySlide();
};
