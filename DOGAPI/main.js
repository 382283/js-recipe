const imageElement = document.getElementById("dog-image")
const button = document.createElement("div")
button.className = "button"
button.textContent = "犬の画像を更新"

button.onclick = function () {
  fetch("https:dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      imageElement.src = data.message
    })
}

document.body.appendChild(button)

fetch("https:dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    imageElement.src = data.message
  })
