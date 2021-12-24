// Declaração de funções(function hoisting) içamento de função
function saudacao() {
    console.log('Hello, how are you?');
}

saudacao();


// first-class objects (objetos de primeira classe)
// function expression (expressão de função) 
//'A função se torna um dado, armazenado em uma variavel.'

const resposta = function() {
    console.log('I am great.');
}

function retornaDado(funcao) {
    funcao();
}
retornaDado(resposta)


// Arrow Function (Função de seta)
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();


// dentro de um Objeto

const objeto = {
    falar() {
        console.log('estou dentro do objeto.');
    }
}

objeto.falar();