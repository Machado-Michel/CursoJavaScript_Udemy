// ? : --- OPERADORES TERNARIOS ||| (Condição) ? 'Valor para true' : 'Valor para false';
const pontoUsuario = 1050;
const nivelUsuario = pontoUsuario >= 1000 ? `Usuário VIP` : `Usuário Normal`;

const corUsuario = null;
const corPadro = corUsuario || 'Preta';

console.log(nivelUsuario, corPadro);

/* if (pontoUsuario >= 1000) {
    console.log(`Usuário VIP`)
} else {
    console.log(`Usuário Normal.`)
} */

