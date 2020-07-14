// const pessoa1 = {
//     nome: "Luiza",
//     sobrenome: "Oliveira",
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

function createPerson(name, lastName, age) {
    return {
        name, 
        lastName, 
        age
    };
}

const person1 = createPerson("Luiz", "Otávio", 25);
console.log(person1.name);
console.log(person1.lastName);
console.log(person1.age);

const person2 = createPerson("Maria", "Oliveira", 55);
console.log(person2.name);
console.log(person2.lastName);
console.log(person2.age);

const person = {
    name: "Pedro",
    lastName: "Araújo",
    age: 32,
    speak() {
        console.log(`${this.name} ${this.lastName} está falando oi...`);
    }
};

person.speak();
