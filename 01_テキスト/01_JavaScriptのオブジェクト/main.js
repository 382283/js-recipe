// const hikakin = {
//   name: "ヒカキン",
//   age: 24,
//   hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
//   isHappy: true,
//   address: {
//     country: "日本",
//     city: "東京",
//   },
//   sayHello: function () {
//     console.log("ブンブンハロー YouTube")
//   },
// }

// TRY: 練習問題１
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。
const me = {
  name: "服部翼",
}
console.log(me.name)

// const me = { name: 'あなたのなまえ' }

// ブラウザのコンソールを開いてオブジェクトが正しく作れているか確認してみましょう👀

// console.log(me)

// TRY: 練習問題２
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
const hikakin = {
  name: "ヒカキン",
  age: 24,
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}
hikakin.sayHello()
