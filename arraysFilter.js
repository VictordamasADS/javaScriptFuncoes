// filter = filtro (sempre retorna o array, com a mesma quantidade ou menos.)
// Exemplo 1:
/*
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const filtrados = numeros.filter(valor => valor > 50);
console.log(filtrados)
*/


const pessoas = [
    {nome: 'João Victor', idade: 25},
    {nome: 'Maria Clara', idade: 22},
    {nome: 'Phillypa', idade: 25},
    {nome: 'Sarah', idade: 25},
    {nome: 'Elle', idade: 23},
];

//const nomes = pessoas.filter(obj => obj.nome.length > 5);
//const idades = pessoas.filter(obj => obj.idade >= 25);
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a'); //para minusculas com final 'a'
});
console.log(nomeTerminaComA);