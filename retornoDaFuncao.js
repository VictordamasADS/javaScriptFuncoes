// return : retorna um valor e termina a função.

//Exemplo 1:
function dividir(a, b) {
    return a / b;
}
console.log(dividir(26, 2));

//Exemplo 2:
function saudar(comeco) {
    function pessoa(resto) {
        return comeco + '' + resto;
    }
    return pessoa;
}
const comeco = saudar('Olá ');
const resto = comeco('João');
console.log(resto)

//Exemplo 3:
function multiplicar(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplicar = multiplicar(2);
const triplicar = multiplicar(3);
const quadriplicar = multiplicar(4);

console.log(duplicar(2))
console.log(triplicar(2))
console.log(quadriplicar(2))