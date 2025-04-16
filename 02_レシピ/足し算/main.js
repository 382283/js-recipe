const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")

const calcSum = function () {
  const value1 = parseInt(num1.value) || 0
  const value2 = parseInt(num2.value) || 0
  const sum = value1 + value2
  result.textContent = sum
}
document.addEventListener("keydown", (e) => {
  if (e.key === "=") {
    calcSum()
  }
})
