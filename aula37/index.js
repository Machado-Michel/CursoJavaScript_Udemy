const nomes = ['Michel', 'Reis', 'Machado'];

//---------For Clássico - Geralmente com iteráveis (Arrys ou Strings)
//---------For In - Retorna o índice ou chave (Strings, Arrys ou Objetos)
//---------For Of - Retorna o valor em si (Arrays ou Strings)


// For Clássico
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}
console.log('\n#############################');

// For In
for (let i in nomes){
console.log(nomes[i]);
};

console.log('\n#############################');

//For of
for (let valor of nomes) {
    console.log(valor);
};

console.log('\n#############################');

//forEach
nomes.forEach(function (valor, indice){
console.log(`${indice} - ${valor}`);
});