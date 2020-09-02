// オブジェクト記法
const obj = {
  first_name: 'Mafia',
  last_name: 'Code',
  printFullName: function() {
    console.log('hello');
  }
}

obj.printFullName();

// class記法
class MyObj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

obj2.printFullName();