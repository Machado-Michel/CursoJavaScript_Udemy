// Arguments -- Sustenta todos os argumentos enviados.
console.log('---------------------Etapa 1---------------------\n')
function funcao () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total,'\n');
}
funcao(1,2,3,4,5,6,7);
console.log('---------------------Etapa 2---------------------\n')

function funcao2 (a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f,'\n');
}
funcao2(1,2,3);
console.log('---------------------Etapa 3---------------------\n')

function funcaoSoma (a,b) {
    b = b || 0;
console.log(a + b,'\n');
}
funcaoSoma(2);
console.log('---------------------Etapa 4---------------------\n')

function funcao3({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);   
}
let obj = {nome: 'Michel', sobrenome: 'Machado', idade: 28};
funcao3(obj);
console.log('---------------------Etapa 5---------------------\n') // rest operators

function conta(operador, acumulador, ...numeros){
for (let numero of numeros) {
    if (operador ==='+') acumulador += numero;
    if (operador ==='-') acumulador -= numero;
    if (operador ==='/') acumulador /= numero;
    if (operador ==='*') acumulador *= numero;
}
console.log(acumulador);
}
conta('+', 1, 20,30,40,50);
console.log('\n');
console.log('---------------------Etapa 6---------------------\n');


// Function Expression
const contas = function (operador, acumulador, ...numeros){
    for (let numero of numeros) {
        if (operador ==='+') acumulador += numero;
        if (operador ==='-') acumulador -= numero;
        if (operador ==='/') acumulador /= numero;
        if (operador ==='*') acumulador *= numero;
    }
    console.log(acumulador);
    };
    conta('+', 1, 20,30,40,50);


