// If - Pode ser utilizado sozinho na checagem
// Sempre que utitlizo a palvra ELSE, preciso de um IF antes
// Eu posso ter vários ELSE IF na checagem
// Só posso ter um ELSE na checagem

const hora = 250;

if (hora >= 6 && hora <= 11.99) {
    console.log('Bom Dia!');
}
else if (hora >= 12 && hora <= 17.99) {
    console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23.99) {
    console.log('Boa Noite!');
} else if (hora >= 0 && hora <= 5.99) {
    console.log('Boa Noite!');
} else {
    console.log('Digite um valor de horas no formato de 24hrs, ou seja, valor até 24.');
}