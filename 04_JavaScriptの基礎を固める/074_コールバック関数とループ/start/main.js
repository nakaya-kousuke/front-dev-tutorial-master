const arry = [1, 2, 3, 4, 5];

function forEach(ary, callback) {
  for(let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
}

function log(value) {
  console.log(value);
}

forEach(arry, log);