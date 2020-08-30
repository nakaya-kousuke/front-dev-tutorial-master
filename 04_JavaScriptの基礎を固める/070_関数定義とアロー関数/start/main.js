// 関数定義
function hello() {
  console.log('hello ');
}
hello();

function hello2(name = 'Tom') {
  console.log('hello ' + name);
}
hello2('Code Mafia');
hello2('Code Mafia2');
hello2('');

const hello3 =  function(name = 'Tom') {
  console.log('hello ' + name);
}
hello3('Code Mafia');
hello3('Code Mafia2');
hello3('');

// アロー関数
const hello4 =  name => console.log('hello ');
hello4('');

const hello5 =  (name, age)  => console.log('hello ' + name + age);
hello5('Code Mafia ', 10);

// 実用的なアロー関数
const arry = [1, 2, 3, 4, 5, 6];
arry.forEach(value => console.log(arry));

const arry1 = [1, 2, 3, 4, 5, 6];
arry1.forEach(function(value) {
  console.log(value);
})