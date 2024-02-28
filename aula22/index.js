/*/////////////////////////////////////////////////////////////////

OPERADORES LÓGICOS

&& -> And -> E
|| -> Or -> OU
! -> Not -> NÃO

/////////////////////////////////////////////////////////////////*/


/* EXPRESSÃO AND - &&

console.log(true && true && true && true); // Todas as expressões, precisam ser verdadeiras para executar &&.
console.log(true && true && false && true); // Caso uma expressão seja falsa, todo o restante da expressão será falsa.*/

/* EXPRESSÃO OR - ||

console.log(false || true || false || false); 

// Ao contrario de And, se apenas uma Expressão for true, a ação será realizada. Caso todos sejam false, a ação não irá ser realizada.
*/

/* Exemplo de utilizar And

const usuario = 'Michel'; // EX: Form que o usuário digitou.
const senha = '123456'; // EX: Form que o usuário digitou.

const vaiLogar = usuario === 'Michel' && senha === '123456';
console.log(vaiLogar); 
*/

console.log(!true);