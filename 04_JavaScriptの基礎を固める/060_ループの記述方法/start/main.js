const arry =[1, 2, 3, 4, 5];

// ループ記述：for文
for(let i = 0; i < 5; i = i + 1) {
  console.log(i);
}

for(let i = 0; i < 5; i = i + 1) {
  console.log(arry[i]);
}

for(let i = 0; i < arry.length; i = i + 1) {
  console.log(arry[i]);
}

for(let i = 0; i < arry.length; i++) {
  console.log(arry[i]);
}