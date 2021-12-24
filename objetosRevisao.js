//Exemplo 1
// notação de colchete
const pessoa = {
    nome: 'João',
    sobrenome: 'Victor'
}
//console.log(pessoa['nome'], pessoa['sobrenome']);

//dinâmica
const chave = ('nome')
//console.log(pessoa[chave])

//Exemplo 2
const pessoa1 = new Object();
pessoa1.nome = 'João Victor';
pessoa1.sobrenome = 'Damas da Silva';
pessoa1.idade = 25;

pessoa1.falarNome = function() {
    return(`${this.nome} está estudando JS.`);
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

//console.log(pessoa1.getDataNascimento());

//Exemplo 3 - 
//factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('João', 'Victor');
//console.log(p1.nomeCompleto());

//constructor functions

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    //Object.freeze(this) //congela os valores 
}

const produto = new Produto('Iphone 12', 5500);
console.log(produto);