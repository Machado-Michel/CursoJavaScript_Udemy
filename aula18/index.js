const pessoa01 = {
    nome: 'Michel',
    sobrenome: 'Machado',
    idade: 28,

    fala() {
        console.log(`A minha idade atual é ${this.idade} anos.`)
    },
    incrementaIdade (){
        ++this.idade;
    }
}

pessoa01.fala();
pessoa01.incrementaIdade();
pessoa01.fala();






/*function criaPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade
    }
}

const pessoa01 = criaPessoa('Michel', 'Machado', 28);
const pessoa02 = criaPessoa('Angela', 'Reis', 57);
const pessoa03 = criaPessoa('Marcos', 'Alexandre', 37);
const pessoa04 = criaPessoa('Michelli', 'Machado', 39);
const pessoa05 = criaPessoa('Mijas', 'Mijinhas', 28);
*/