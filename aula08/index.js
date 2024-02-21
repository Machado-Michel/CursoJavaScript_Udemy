const nome = 'Michel dos Reis';
const sobrenome = 'Machado';
const idade = 28;
let peso = 80;
const alturaEmM = 1.79;
let anoNascimento = 2023 - idade;
let valorIMC;
valorIMC = (peso/(alturaEmM*alturaEmM)).toFixed(2);
let resultadoIMC;


if (valorIMC <= 18.5) {
    resultadoIMC = 'Seu IMC foi Classificado como: Magreza!!';
}
if (valorIMC >= 18.5 && valorIMC <= 24.99) {
    resultadoIMC = 'Seu IMC foi Classificado como: Normal!!';
}
if (valorIMC > 24.99 && valorIMC <= 29.99) {
    resultadoIMC = 'Seu IMC foi Classificado como: Sobrepeso!!';
}
if (valorIMC > 29.99 && valorIMC <= 39.99) {
    resultadoIMC = 'Seu IMC foi Classificado como: Obeso!!';
}
if (valorIMC > 40 ) {
    resultadoIMC = 'Seu IMC foi Classificado como: Obesidade Grave!!';
}

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg.
Ele mede, ${alturaEmM} metros de altura e o seu IMC é de: ${valorIMC}.`);
console.log(`${nome} nasceu em: ${anoNascimento}!`);
console.log(resultadoIMC);