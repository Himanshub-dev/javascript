const score = 400
console.log(score);
const Balance = new Number(100)
console.log(Balance);
console.log(Balance.toString());
console.log(typeof Balance);
console.log(typeof score);

console.log(Balance.toString().length);
console.log(Balance.toFixed(1));

const othernumber = 123.345
console.log(othernumber.toPrecision(4));

const hun = 1000000
console.log(hun.toLocaleString());


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)