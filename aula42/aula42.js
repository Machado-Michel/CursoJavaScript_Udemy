/*
// Solução que eu fiz
const paisagem = `A Foto selecionada está no modo Paisagem.`;
const retrato = `A Foto selecionada está no modo Retrato.`;
const ePaisagem = (larg, alt) => larg > alt ? paisagem : retrato;

console.log(ePaisagem(3240, 1080)); */

/*
// Solução do Professor Luiz Otávio

function ePaisagem (largura, altura) {
    return largura >= altura
}

console.log(ePaisagem(1920,1920)); */

//Solução com Arrow Function
const ePaisagem = (largura, altura) => largura >= altura;
console.log(ePaisagem(1920,2000));