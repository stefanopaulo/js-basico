// IEEE 754-2008

let num1 = 10.25;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

let temp = num1 * 'Ola';
console.log(temp);
console.log(Number.isNaN(temp));

num1 = 0.7;
num2 = 0.1;

console.log(num1 + num2);

num1 += num2;
num1 += num2;
num1 += num2;

num1 = Number(num1.toFixed(2))

console.log(num1);
console.log(Number.isInteger(num1));