const figure = document.getElementById("figure")
let shapeIndex = 0

figure.onclick = function () {
  figure.classList.remove("square", "rounded", "triangle")

  shapeIndex = (shapeIndex + 1) % 3

  if (shapeIndex === 0) {
    figure.classList.add("square")
  } else if (shapeIndex === 1) {
    figure.classList.add("square", "rounded") // 丸は四角 + 丸み
  } else if (shapeIndex === 2) {
    figure.classList.add("triangle")
  }
}
