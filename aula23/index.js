/* 
&& -> false && true -> false "O valor mesmo"
|| -> true || false -> vai retornar o "o valor verdadeiro"

Abaixo os FALSY
0 - Valor zero
'' "" `` - Strings vazias
null / undefined
NaN
false - Valor Literal
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);