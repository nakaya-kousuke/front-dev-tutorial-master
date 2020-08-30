const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go shopping',
    completed: false
  }
]

// for
for(let i = 0; i < todos.length; i++) {
  console.log(i, todos[i]);
}

// 特定の値（value）の取得
for(let i = 0; i < todos.length; i++) {
  console.log(i, todos[i].title);
}

// 定義した変数の取得
for(let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  console.log(i, todo.completed);
}

// if文
// trueのみ取得する
for(let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  if(todo.completed === true) {
    console.log(i, todo.completed);
  }
}

// trueのtitleを取得する
for(let i = 0; i < todos.length; i++) {
  let todo = todos[i];
  if(todo.completed === true) {
    console.log(i, todo.title);
  }
}

// for_in
for(let i in todos) {
  console.log(i, todos[i]);
}

// for_of
for(let todo of todos) {
  console.log(todo);
}

// trueのtitleを取得する
for(let todo of todos) {
  if(todo.completed === true) {
    console.log(todo.title);
  }
}