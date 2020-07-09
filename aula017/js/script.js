const num = Number(prompt('Digite um número:'));
const numTitle = document.getElementById('num-title');
const text = document.getElementById('text');

numTitle.innerHTML = num;
text.innerHTML += `<p>Raíz quadrada: ${Math.sqrt(num)}</p>`;
text.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
text.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
text.innerHTML += `<p>Com duas casa decimais: ${num.toFixed(2)}</p>`;