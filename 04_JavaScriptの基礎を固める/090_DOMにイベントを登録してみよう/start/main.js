const btn = document.querySelector('#btn');

// アラートイベント
// 無名関数
// btn.addEventListener('click', function() {
//   alert('hello');
// });

// const hello = function() {
//   alert('hello');
// };
// btn.addEventListener('click', hello);
// btn.removeEventListener('click', hello);


const h1 = document.querySelector('h1');

const changeColor = function() {
  h1.style.color = 'red';
};
const changeBackgroundColor = function() {
  h1.style.backgroundColor = 'green';
};

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBackgroundColor);