/*const nome = 'Machado';

let i = 0;

while (i < nome.length) {
console.log(nome[i]);
i++;
}

console.log('Segue o Código...');*/

//Cria uma função para gerar numeros aleatórios.
function numberRandon(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

console.log('Começando WHILE\n');
const min = 1;
const max = 50;
let rand = numberRandon(min, max);
console.log(rand);

while (rand !== 10) {
    rand = numberRandon (min, max);
    console.log(rand);
}

console.log('\nSeparando para o DO WHILE\n');

do {
    rand = numberRandon (min, max);
    console.log(rand);

} while (rand !== 10);