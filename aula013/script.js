let varA = 'A';
let varB = 'B';
let varC = 'C';
console.log(varA, varB, varC)

let aux = varA;
varA = varB;
varB = varC;
varC = aux;
console.log(varA, varB, varC)