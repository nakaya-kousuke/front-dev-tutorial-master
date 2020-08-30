// if文
if(true) {
  console.log('this is true')
}

if(false) {
  console.log('this is true')
} else {
  console.log('this is false')
}

if(false) {
  console.log('this is true')
} else if(true) {
  console.log('this is true')
} else {
  console.log('this is false')
}

// ==：値の比較条件式
if(1 == '1') {
  console.log('this is true')
} else {
  console.log('this is false')
}

// ===：型の比較条件式
if(1 === '1') {
  console.log('this is true')
} else {
  console.log('this is false')
}

// &&：論理演算子（且つ）
if(1 == '1' && 1 === '1') {
  console.log('this is true')
} else {
  console.log('this is false')
}

// ||：論理演算子（または）
if(1 == '1' || 1 === '1') {
  console.log('this is true')
} else {
  console.log('this is false')
}