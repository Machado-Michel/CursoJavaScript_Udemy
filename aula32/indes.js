/*let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);*/

/* 
const numeros = [1000, 25550, 35155, 4455, 585485, 6541545, 75415, 88585, 92221];
const [primeiroNum, segundoNum, terceiroNum, quartoNum, ...resto] = numeros;
console.log(primeiroNum, segundoNum, terceiroNum);
console.log(resto); */

/*
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = numeros;
console.log(seis); */

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]);

//Atribuição via Desestruturação para ARRAYS