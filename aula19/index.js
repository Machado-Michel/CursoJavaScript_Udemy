/*
Primitivos (Imutáveis) - String, Number, Boolean, Undefined, null (bigint, symbol). Valores Copiados

REFERENCIA (Mutável) - array, object e function

//////////////////////////////////////////////////////////////////////////////////////////

let nome = 'Michel';
nome[0] = 'C'; // Essa chamada não altera nada, pois a variavel nome é uma String e String é Imutavel.
console.log(nome[0], nome)

*/

/*
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); */
/*
let a = [1,2,3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz')
console.log(a, c);
*/

const a = {
    nome: 'Michel',
    sobrenome: 'Machado'
};

const b = {...a};

a.nome = 'João'
console.log(a)
console.log(b)