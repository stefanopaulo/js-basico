let num1 = Number(prompt('Digite um número:'));
let num2 = Number(prompt('Digite outro número:'));
let operacao = prompt('Operação (+ - * /):');
let res;

switch (operacao) {
    case '+':
        res = num1 + num2;
        break;
    case '-':
        res = num1 - num2;
        break;
    case '*':
        res = num1 * num2;
        break;
    case '/':
        res = num1 / num2
        break
    default:
        alert('Operação inválida! Considerando SOMA!');
        res = num1 + num2
}

alert(`Resultado = ${res}`);