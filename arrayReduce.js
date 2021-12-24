// reduzindo o array
const numeros = [12,5,45,21,88,33,44,63,58,9,57,95,28,71]

//somar
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0)

//pares
const pares = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 == 0) acumulador.push(valor);
    return acumulador;
}, [])

//dobro
const dobro = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor*2);
    return acumulador;
}, [])

//console.log(dobro);


//Com objetos
const produtos = [
    {nome: 'Notebook Acer Nitro 5', preco: 5500},
    {nome: 'Playstation 5', preco: 4500},
    {nome: 'Iphone 12', preco: 6500},
    {nome: 'Apple watch 6', preco: 3000},
    {nome: 'Xbox Series X', preco: 4800},
];

const maisCaro = produtos.reduce(function(acumulador, valor) {
    if(acumulador.preco > valor.preco) return acumulador;
    return valor;
})

console.log(maisCaro)