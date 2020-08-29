// コールバック関数
// const hello = function(name, age) {
//   console.log('hello ' + name + age)
//   return name + age
// }

// 無名関数
function hello(name, age) {
  console.log('hello ' + name + age)
  return name + age
}

hello('Code Mafia', 10)
const returnValue = hello('Code Mafia2', 20)
console.log(returnValue)