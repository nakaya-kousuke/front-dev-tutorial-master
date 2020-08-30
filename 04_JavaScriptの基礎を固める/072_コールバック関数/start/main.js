// コールバック関数：引数に値を返す関数
function hello(callback) {
  console.log('hello ' + callback());
}

function getName() {
  return 'Code Mafia'
}

hello(getName);

// ※()は関数の実行

function doSomething(a, b, callback) {
  // console.log(callback);
  const result = callback(a, b);
  // console.log(a, b);
  console.log(result);
}

// function multply(a, b) {
//   return a * b;
// }
function puls(a, b) {
  return a + b;
}

// doSomething(4, 5, multply);
doSomething(4, 5, puls);
