const numeros = [1,2,3,4,5,6,7,8,9];

// FEITO COM FOR OF

/*for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
}*/
 

// FEITO COM FOR IN

/*for (let i in numeros) {
    let numero = numeros[i];

    if (numero ===2 ) {
        console.log('Pulei o número 2...')
        continue;
    }

    console.log(numero);

    if (numero ===7) {
        console.log('7 encontrado. Saindo...');
        break;
    }
}*/

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2 ) {
        console.log('Pulei o número 2...\n');
        i++; // Sempre colocar a variavel de controle, antes de Continue, para não colocar o bloco em Looping
        continue; // Continue ----- Continua para a próxima iteração.
    }

    console.log(numero);

    if (numero ===7) {
        console.log('\nNúmero 7 encontrado. Saindo...');
        i++; // Sempre colocar a variavel de controle, antes de Continue, para não colocar o bloco em Looping
        break; // Braek ----- Sai do laço.
    }
    i++;
} 