const arry = [1, 2, 3, 4, 5];

// 第一引数 (v)   = 値
// 第二引数 (i)   = 添字
// 第三引数 (ayt) = 配列

// forEach
arry.forEach(function(v, i, ayr) {
  console.log(v, i, ayr);
});

// for
for(let i = 0; i < arry.length; i++) {
  const v = arry[i];
  console.log(v);
}

// アロー関数
arry.forEach(v => console.log(v));