// fechamentos de funções em JS
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('João');
const funcao2 = retornaFuncao('Victor');
//console.dir(funcao);
//console.dir(funcao2);

console.log(funcao(), funcao2())