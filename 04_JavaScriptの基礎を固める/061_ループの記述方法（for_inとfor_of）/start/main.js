const arry = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arry.length; i++) {
    console.log(i);
}

// for_in：添字が返ってくる
// ※添字を定義する変数は「i」を使う
for (let i in arry) {
    console.log(i);
}

for (let i in arry) {
    console.log(arry[i]);
}

for (let i in arry) {
    console.log(i, arry[i]);
}

// for_of：値（value）が返ってくる
// ※値（value）を定義する変数は「v（valueの頭文字）」を使う
for (let v of arry) {
    console.log(v);
}