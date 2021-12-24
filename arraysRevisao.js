// pop = estourar / shift = mudança 
// push = empurrar / unshift = sem mudança
// slice = fatiar / split = dividir
const nomes = ['Marie', 'Alice', 'Elle'];
const removido = nomes.pop();  //remove no Final
const removido2 = nomes.shift();  //remove no Início
nomes.push('João');  //acrescenta o nome no final
nomes.unshift('Victor');  //acrescenta o nome no início
const novo = nomes.slice(1,2); //remove pelo indice do array
console.log(nomes, removido, removido2, novo)