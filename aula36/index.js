const pessoa = {
    nome: 'Michel',
    sobrenome: 'Machado',
    idade: 28,
    peso: 104.547,
    cpf: '390.685.158-75',
    
    endereco: {
        rua: 'Luciano Marchesi',
        numero: 410,
        bairro: 'Jardim São Francisco',
        cidade: 'Mococa',
        estado: 'São Paulo',
        
        continente: {
            pais: 'Brasil',
            local: 'America do Sul',
        }

    }
};

console.log('Dados da Pessoa:')
for (let i in pessoa) {
    if (typeof pessoa[i] === 'object') {
        console.log(`${i}:`);
        for (let j in pessoa[i]) {
            console.log(`   ${j}: ${pessoa[i][j]}`);
        }
    } else {
        console.log(`${i}: ${pessoa[i]}`);
    }
}

console.log('\nEndereço:');
for (let i in pessoa.endereco) {
    console.log(`${i}: ${pessoa.endereco[i]}`);
}

console.log('\nContinente:');
for (let i in pessoa.endereco.continente) {
    console.log(`${i}: ${pessoa.endereco.continente[i]}`);
}


/*
const frutas = ['Maça', 'Banana', 'Pêra', 'Laranja', 'Uva'];

// For In ---- Lê os índices ou chaves do objeto ou array

for (let i in frutas) {
    console.log(frutas[i]);
}
*/
/*

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

*/