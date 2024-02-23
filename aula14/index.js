// IEEE 754-2008 Padão que o JavaScript segue.
let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2); ------------|||| Convertendo num1 para String com o .toString() sem alterar o valor da Variavel num1
//num1 = num1.toString(); ------------||| Convertendo num1 para String com o .toString() e alterando o valor inicial da variavel num1
//console.log(num1.toString(2)); ------------||| Exibindo o valor de num1 em código Binário com o .toString(2).
//console.log(num1.toFixed(2)); ------------||| Exibindo o valor decimal fixado com 2 casas após o ponto com .toFixed(2).
//console.log(Number.isInteger(num1)); ------------||| Verifica se o valor da variavel é número intero com o Number.isInteger(num1).
//console.log(Number.isNaN(temp)); ------------||| Verifica se o valor da variavel temp, é um NaN com Number.isNaN(temp).