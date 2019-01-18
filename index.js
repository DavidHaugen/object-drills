'use strict';

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function(){
//     return this.water / this.flour * 100;
//   }
// };

// console.log(loaf.hydration());


// const fooObj = {
//   foo: 'foo',
//   bar: 'bar',
//   fum: 'fum',
//   quux: 'quux',
//   spam: 'spam',
// };

// for (const item in fooObj){
//   console.log(`${item}: ${fooObj[item]}`);
// }

// const hobbitEats = {
//   meals: [
//     'breakfast',
//     'second breakfast',
//     'elevenses',
//     'lunch',
//     'afternoon tea',
//     'dinner',
//     'supper'
//   ]
// };

// console.log(hobbitEats.meals[3]);

// const person1 = {
//   name: 'Tusk',
//   jobTitle: 'Snowball guy'
// };

// const person2 = {
//   name: 'Juggernaut',
//   jobTitle: 'Serious guy',
//   boss: 'Tusk'
// };

// const person3 = {
//   name: 'Earth Spirit',
//   jobTitle: 'Relaxed rock guy',
//   boss: 'Tusk'
// };

// const dotaChars = [person1, person2, person3];

// function describeChars(array) {
//   array.forEach(item => {
//     item.boss === undefined ? console.log(`${item.jobTitle} ${item.name} runs the show`) : 
//       console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}`);
//   });
// }

// describeChars(dotaChars);

const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

const secretMessage = 'craft block argon meter bells brown croon droop';

function decode(string){
  if (!Object.keys(cipher).includes(string[0])){
    return ' ';
  } else {
    const firstLetter = string[0];
    const cipherResult = cipher[firstLetter];
    const result = string[cipherResult];

    return result;
  }
}

function decoder(string){
  const splitString = string.split(' ');
  const letterArray = splitString.map(word => decode(word));
  const resultMessage = letterArray.join('');
  return resultMessage;
}

console.log(decoder(secretMessage));