const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (a) {
  console.log(a)
}

inputText.oninput = logValue
inputDate.oninput = logValue
