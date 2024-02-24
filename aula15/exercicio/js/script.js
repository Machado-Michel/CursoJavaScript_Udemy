const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada é: <span>${numero ** 0.5}</span></p>`;
texto.innerHTML += `<p>${numero} é Inteiro: <span>${Number.isInteger(numero)}</span></p>`;
texto.innerHTML += `<p>É um NaN: <span>${Number.isNaN(numero)}</span>.</p>`;
texto.innerHTML += `<p>Arredondado para Baixo: <span>${Math.floor(numero)}</span>.</p>`;
texto.innerHTML += `<p>Arredondado para Baixo: <span>${Math.ceil(numero)}</span>.</p>`;
texto.innerHTML += `<p>Com duas casas Decimais: <span>${numero.toFixed(2)}</span>.</p>`;