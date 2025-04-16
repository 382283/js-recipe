const figure = document.getElementById("figure")
const squareBtn = document.getElementById("square-button")
const circleBtn = document.getElementById("circle-button")

squareBtn.onclick = function () {
  figure.classList.remove("rounded")
}
circleBtn.onclick = function () {
  figure.classList.add("rounded")
}
figure.onclick = document.getElementById("figure")

figure.onclick = function () {
  figure.classList.toggle("rounded")
}
