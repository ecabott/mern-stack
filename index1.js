//using var
var a = '123';
console.log(a);

//using let
let b = '456';
console.log(b);

//using const
const c = 789;
console.log(c);

//  alert('hmm');
//  const age = prompt('age?');
//  console.log(age);

let x = 11;
// let y = 2;
// if (x == 1){
//     console.log('x is 1');
// }

// if (x == 1 && y == 2)
// {
//     console.log('&& operator tested');
// }

// if (x == 1){
//     console.log('x is 1');
// }
// else {
//     console.log('x is not 1');
// }

let result = x === 1 ? 'x is 1' : 'x is not 1';
console.log(result);

// learning about functions

// function add (a,b){
//     return a + b;
//     console.log(a+b);
// };

//ES6 Style (Arrow Function)
const add = (a, b) => {
    console.log(a+b);
}

add(1,2);
add(3,6);