// Declaração de função (Função Hoisting)
falaOi();
function falaOi (){
    console.log('Oii...');
}

//First-Class Objects (Objetos de Primeira Classe)
// Function Expression
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

function executarFuncao (funcao) {
    console.log('Vou Executar sua função abaixo...')
    funcao();
};
executarFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma ARROW FUNCTION");
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou Falando');
    }
}
obj.falar();