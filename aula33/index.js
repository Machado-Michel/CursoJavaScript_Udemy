const pessoa = {
nome: 'Michel',
sobrenome: 'Machado',
idade: 28,
endereco: {
    rua: 'Luciano Marchesi',
    numero: 410
}
};

// ATRIBUIÇÃO via DESESTRUTURAÇÃO
const { endereco:{rua: r = 'Sem Endereço', numero}, endereco } = pessoa;
console.log( r, numero, endereco );