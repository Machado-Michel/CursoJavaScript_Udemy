/*
try {
    // É executado quando não há ERROS
    console.log('Abrir um arquivo.');
    console.log('Manipulei o arquivo e gerou erro.');
    console.log('Fechei o arquivo.');
    try {
        console.log(b);
    } catch (err) {
        console.log('Deu Erro.');
    } finally {
        console.log('Também sou Finally');
    }

} catch (err) {
    // É executado quando há ERROS
    console.log('Tratando o erro.');

} finally {
    // SEMPRE é executado.
    console.log('FINALLY: Eu sempre sou executado');
} */

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando Instancia de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(hora);
} catch (err) {
    // Tratrar o ERRO
} finally {
    console.log('Tenha um bom dia.')
}