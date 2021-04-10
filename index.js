// 高階関数

// const add2 = x => x + 2

// function twice(f, x) {
//   return f(f(x))
// }

// const result = twice(add2, 10)
// console.log(result) //=> 14

// const items = ["a", "b", "c"]

// const func =(item) => { console.log(item);};

// items.map(func)

// items.map()

window.prompt('最初はぐー、じゃんけんぽん')
const messages = ['Winner','Loser','Drow'];
const messageNo = Math.floor( Math.random() * messages.length);
document.write(messages[messageNo]);

// switch(num) {
//     case "0":
//         console.log("勝ち");
//         break
//     case "1":
//         console.log("負け");
//         break
//     default:
//         console.log("引き分け");
//         break
// }
