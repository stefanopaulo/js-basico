/**
 * Primitivos (imutáveis) = string, number, boolean, undefined, null
 * 
 * Referência (geralmente mutáveis) - array, object, function
 */

let a = 'A';
let b = a;
console.log(a, b);

a = 'Outra Coisa';
console.log(a, b);

a = [1 , 2, 3];
b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

let c = b;
console.log(a, b, c);

c.push(4);
console.log(a, b, c);

const person = {
    firstName: "Pedro",
    lastName: "Araújo"
};

const copyPerson = person;
copyPerson.firstName = "Stefano";
copyPerson.lastName = "Souza";

console.log(person);
