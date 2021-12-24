// IIFE - Immediately invoked function expression
// Expressão de função chamada imediatamente (IIFE)

//Exemplo 1:
(function() {
    const saudar = 'hello';
    console.log(saudar);
})();


// Exemplo 2:
(function(comprimentar) { //criando o parametro
    const sobrenome = 'Victor';

    function juntarNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(juntarNome('João'));
    }

    falaNome();
    console.log(comprimentar) //print do parametro

})('How are you?'); //definição do parametro dentro do (...,...)

