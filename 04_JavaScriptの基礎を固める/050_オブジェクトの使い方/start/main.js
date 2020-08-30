// オブジェクトの初期k（{}：オブジェクトリテラル）
const person = {
  // name: 'Code Mafia'
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  intersts: {
    sports: 'soccer',
    music: 'piano'
  }
};

// ドット記法
// person.name
console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.intersts);
console.log(person.intersts.sports);

// valueの変更
person.age = 12;
console.log(person.age);

// ブラケット
const ageKey = 'age';
person[ageKey] = 12;
console.log(person.age);

// methodを格納
const person2 = {
  // name: 'Code Mafia'
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  intersts: {
    sports: 'soccer',
    music: 'piano'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1]);
  }
};

person2.getFullName();