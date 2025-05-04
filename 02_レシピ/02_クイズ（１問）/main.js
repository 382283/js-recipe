const choice = document.getElementById("choices-container")
const question = document.createElement("question")
question.className = "question"
question.textContent = "問題"
const button1 = document.createElement("button1")
button1.className = "button1"
button1.textContent = "選択肢1"
button1.onclick = () => alert("正解")

const button2 = document.createElement("button2")
button2.className = "button2"
button2.textContent = "選択肢2"
button2.onclick = () => alert("不正解")

const button3 = document.createElement("button3")
button3.className = "button3"
button3.textContent = "選択肢3"
button3.onclick = () => alert("不正解")

choice.append(question, button1, button2, button3)
