/*
try {
    console.log(naoExisto);
} catch (err) {
console.log("naoExisto não existe...")
} */

function soma(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error("N1 e N2, precisam ser numeros...");
    }

    return n1 + n2;
}

try {
    console.log(soma(5, 5));
    console.log(soma('5', 5));
} catch (err) {
    console.log(err);
}