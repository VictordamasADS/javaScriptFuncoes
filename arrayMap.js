//Mapeando um Array

const numeros = [5,50,7,8,17,57,34,76,36,85,14,24];
const duplicador = numeros.map(function(valor) {
    return valor * 2;
})
//console.log(duplicador);

const produtos = [
    {nome: 'Notebook Acer Nitro 5', preco: 5500},
    {nome: 'Playstation 5', preco: 4500},
    {nome: 'Iphone 12', preco: 6500},
    {nome: 'Apple watch 6', preco: 3000},
    {nome: 'Xbox Series X', preco: 4800},
];

const nomes = produtos.map(obj => obj.nome);
const precos = produtos.map(valor => valor.preco);
const id = produtos.map(function(objeto, indice) {
    const newOjt = { ...objeto };
    newOjt.id = indice;
    return newOjt;
});
console.log(id)