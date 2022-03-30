const button = document.querySelectorAll(".button-learn");
const images = document.querySelectorAll(".img-car");

button.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    images.forEach((img) => {
      img.classList.remove("animated-car");
    });
    if (e.target.classList.contains("sedan")) {
      let car = document.querySelector(".img-car.sedan");
      car.classList.add("animated-car");
    } else if (e.target.classList.contains("suv")) {
      let car = document.querySelector(".img-car.suv");
      car.classList.add("animated-car");
    } else if (e.target.classList.contains("luxury")) {
      let car = document.querySelector(".img-car.luxury");
      car.classList.add("animated-car");
    }
  });
});
