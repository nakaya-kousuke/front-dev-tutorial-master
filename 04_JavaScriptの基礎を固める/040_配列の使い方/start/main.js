// const arry = new Array(1, 2, 3, 4, 5, 6);
// console.log(arry[5]);

// push：要素を追加
const arry = [1, 2, 3, 4, 5, 6, 'moji', false];
arry.push('new item');
console.log(arry);

// unshift：先頭に要素を追加
const arry2 = [1, 2, 3, 4, 5, 6, 'moji', false]
arry2.unshift('new item')
console.log(arry2);

// pop：最後の要素を削除
const arry3 = [1, 2, 3, 4, 5, 6, 'moji', false]
arry3.pop()
console.log(arry3);

const val = arry.pop();
console.log(val);

// shift：先頭の要素を削除
const arry4 = [1, 2, 3, 4, 5, 6, 'moji', false]
arry4.shift()
console.log(arry4);