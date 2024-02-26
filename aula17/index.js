/*

function saudacao(nome) {
// console.log(`Bom dia, ${nome}!`) // Return abaixo retorna o valor que foi atribuido em console.
return `Bom dia, ${nome}!`;
}

const variavel = saudacao(`Michel`);
console.log(variavel);

*/

/* // DECLARAÇÃO CLÁSSICA DE FUNÇÃO

function soma (x = 1, y = 1) {
    const resultado = x + y;
    return resultado; // Nada é executado após Return, a não ser que se tenha feito uma condicional para mais opções dentro da função.
}

const resultado = soma(4, 2);
console.log(resultado);
*/

const raiz = n =>  n ** 0.5; // ARROW FUNCTION
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));