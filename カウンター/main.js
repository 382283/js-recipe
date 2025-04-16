const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const twiceButton = document.getElementById("twice-button")
let count = 0

const Button = function () {
  display.textContent = count
}

plusButton.onclick = function () {
  count += 1
  Button()
}

minusButton.onclick = function () {
  count -= 1
  Button()
}

twiceButton.onclick = function () {
  count *= 2
  Button()
}
