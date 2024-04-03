/*

// MINHA SOLUÇÃO PARA A ATIVIDADE.

const verificaDivisao = (numero) => {
    if (typeof numero !== 'number' || numero < 0 || numero > 100) {
        return 'Número inválido\nDigite um valor de 0 até 100.';
    }
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}; */

// SOLUÇÃO DO PROFESSOR PARA A ATIVIDADE

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}