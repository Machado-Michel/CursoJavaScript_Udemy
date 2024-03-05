/*

const h1 = document.querySelector('.container #h1-hora');
const data = new Date();

function getDiaSemana (diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0: diaSemanaTexto = `Domingo`; return diaSemanaTexto;
        case 1: diaSemanaTexto = `Segunda-Feira`; return diaSemanaTexto;
        case 2: diaSemanaTexto = `Terça-Feira`; return diaSemanaTexto;
        case 3: diaSemanaTexto = `Quarta-Feira`; return diaSemanaTexto;
        case 4: diaSemanaTexto = `Quinta-Feira`; return diaSemanaTexto;
        case 5: diaSemanaTexto = `Sexta-Feira`; return diaSemanaTexto;
        case 6: diaSemanaTexto = `Sábado`; return diaSemanaTexto;
        default: `Dia inválido. Por favor, tente novamente!`; break;
    }
}

function getMes (valorMes) {
    let valorMesTexto;
    switch (valorMes) {
        case 0: valorMesTexto = `Janeiro`; return valorMesTexto;
        case 1: valorMesTexto = `Fevereiro`; return valorMesTexto;
        case 2: valorMesTexto = `Março`; return valorMesTexto;
        case 3: valorMesTexto = `Abril`; return valorMesTexto;
        case 4: valorMesTexto = `Maio`; return valorMesTexto;
        case 5: valorMesTexto = `Junho`; return valorMesTexto;
        case 6: valorMesTexto = `Julho`; return valorMesTexto;
        case 7: valorMesTexto = `Agosto`; return valorMesTexto;
        case 8: valorMesTexto = `Setembro`; return valorMesTexto;
        case 9: valorMesTexto = `Outubro`; return valorMesTexto;
        case 10: valorMesTexto = `Novembro`; return valorMesTexto;
        case 11: valorMesTexto = `Dezembro`; return valorMesTexto;
    }
}

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemana(diaSemana);
    const nomeMes = getMes(numeroMes);

    return (`${nomeDia}, ${zeroEsquerda(data.getDate())} de ${nomeMes}` + 
    ` de ${data.getFullYear()} <p>${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}:${zeroEsquerda(data.getSeconds())}</p>`);
}

h1.innerHTML = criaData(data);

*/

/*
h1.innerHTML = `${getDiaSemana(data.getDay())}, ${data.getDate()} de ${getMes(data.getMonth())} de ${data.getFullYear()}. <p>${data.getHours()}:${data.getMinutes()}</p>`;*/

// Jeito mais simples de fazer, tudo o que foi ACIMA.

/*const h1 = document.querySelector('.container #h1-hora');
const data = new Date();
h1.innerHTML = `${data.toLocaleDateString('pt-BR', {dateStyle:'full'})}<p>
${data.toLocaleTimeString('pt-BR', {timeStyle: 'short'})}</p>`;*/

const h1 = document.querySelector('.container #h1-hora');
const data = new Date();

function getDiaSemana (diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return diasSemana[diaSemana];
}

function getMes (numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[numeroMes];
}

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemana(diaSemana);
    const nomeMes = getMes(numeroMes);

    return (`${nomeDia}, ${zeroEsquerda(data.getDate())} de ${nomeMes}` + 
    ` de ${data.getFullYear()} <p>${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}:${zeroEsquerda(data.getSeconds())}</p>`);
}

h1.innerHTML = criaData(data);