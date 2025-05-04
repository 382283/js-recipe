const geekSalon = ["web", "game", "iphon", "webExpert"]
const webExpert = {
  uniqueCotent: "チーム開発",
  language: "JavaScript",
}

localStorage.geekSalon = JSON.stringify(geekSalon)
localStorage.webExpert = JSON.stringify(webExpert)

console.log(localStorage.geekSalon)

console.log(localStorage.webExpert)

//新しく変数に入れてコンソールを出力
let courses = JSON.parse(localStorage.geekSalon)
let courseDetails = JSON.parse(localStorage.webExpert)

console.log(courses)

console.log(courseDetails)
