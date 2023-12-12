// Lesson4- Objects and arrys
// arrays
let names4 = ['luigi', 'mario', 'yoshi'];

names4.push('toad');
// names4.push(3);
// names4[1] = 3;

let numbers4 = [10, 20, 12, 15];

numbers4.push(25);
// numbers4.push('shaun');
// numbers4[0] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9];//it doesnot have to follow the order

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects> it has to have its original structure
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
  // skills: ['running'],
};

