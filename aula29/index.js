const data = new Date();
let diaSemana = data.getDay();
//diaSemana = 2;



function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0: diaSemanaTexto = `Domingo`; return diaSemanaTexto;
        case 1: diaSemanaTexto = `Segunda-Feira`; return diaSemanaTexto;
        case 2: diaSemanaTexto = `Terça-Feira`; return diaSemanaTexto;
        case 3: diaSemanaTexto = `Quarta-Feira`; return diaSemanaTexto;
        case 4: diaSemanaTexto = `Quinta-Feira`; return diaSemanaTexto;
        case 5: diaSemanaTexto = `Sexta-Feira`; return diaSemanaTexto;
        case 6: diaSemanaTexto = `Sábado`; return diaSemanaTexto;
        default: diaSemanaTexto = `Dia Inválido`; return diaSemanaTexto;
    }
}

const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(`${diaSemana} - ${diaSemanaTexto}.`);



/*
if (diaSemana === 0) {
    diaSemanaTexto = `Domingo`;
} else if (diaSemana === 1) {
    diaSemanaTexto = `Segunda-Feira`;
} else if (diaSemana === 2) {
    diaSemanaTexto = `Terça-Feira`
} else if (diaSemana === 3) {
    diaSemanaTexto = `Quarta-Feira`;
} else if (diaSemana === 4) {
    diaSemanaTexto = `Quinta-Feira`;
} else if (diaSemana === 5) {
    diaSemanaTexto = `Sexta-Feira`;
} else if (diaSemana === 6) {
    diaSemanaTexto = `Sábado`;
} else {
    diaSemanaTexto = `Dia Inválido`;
} */