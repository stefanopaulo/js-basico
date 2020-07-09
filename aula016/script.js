let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num1);
console.log(num2);

num2 = Math.ceil(num1);
console.log(num2);

num2 = Math.round(num1);
console.log(num2);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

const aleatorio = Math.round(Math.random() * (100 - 1) + 1);
console.log(aleatorio);

console.log(Math.PI);

console.log(Math.pow(2, 10));
console.log(2 ** 10);
console.log(Math.sqrt(64));

num1 = 25;
console.log(num1 ** 0.5);

console.log(100 / 0); // (Infinity) Não da erro, é avaliado como true, mas não é aceito na matemática!