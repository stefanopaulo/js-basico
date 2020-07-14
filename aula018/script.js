const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
console.log(alunos);

alunos[3] = 'Luiza';
console.log(alunos);
console.log(alunos.length);

// adiciona elementos no final
alunos[alunos.length] = 'Pedro';
alunos[alunos.length] = 'Fábio';
console.log(alunos);
console.log(alunos.length);

alunos.push('Otávio');
console.log(alunos);
console.log(alunos.length);

// adiciona elementos no inicio
alunos.unshift('José');
alunos.unshift('André');
console.log(alunos);
console.log(alunos.length);

// remove o último elemento
const removido = alunos.pop();
console.log(`Removido = ${removido}`);
console.log(alunos);
console.log(alunos.length);

// remove o primeiro elemento
alunos.shift();
console.log(alunos);
console.log(alunos.length);

// remove o elemento mas mantém o índice
delete alunos[1];
console.log(alunos);

console.log(alunos[11]);

alunos[1] = 'Luiz';

console.log(alunos.slice(0, 3));
console.log(alunos.slice(-3));

console.log(typeof alunos);
console.log(alunos instanceof Array);
