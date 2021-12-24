// Filter + Map + Reduce
const numeros = [5,56,44,24,21,68,86,43,79,57]

const numerosPares = numeros
    .filter(valor => valor % 2 == 0) //pega os pares
    .map(valor => valor * 2) //multiplica por 2
    .reduce((ac,valor) => ac + valor); //soma tudo

console.log(numerosPares)