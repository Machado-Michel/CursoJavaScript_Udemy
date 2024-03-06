const verdadeira = true;

// let tem escopo de bloco. Ex: { .... }
// var só tem escopo de função

let nome = 'Luiz'; // criando variavel
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Mijas'; // criando outra variavel dentro do bloco
    console.log(nome, nome2);
    if (verdadeira) {
        console.log('OK')
    }
}