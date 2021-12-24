// Prototipos voltado para Orientação a Objetos
// construtora -> molde(classes)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//prototipo
Pessoa.prototype.hello = 'Olá'

//instância
const pessoa1 = new Pessoa('João', 'Victor');
//console.log(pessoa1.nomeCompleto())
//console.log(pessoa1.hello)


//Manipulando Prototipos
// new Object = Object.prototype

/*
const objetoA = {
    chaveA: 'eu sou a chave A'
}

const objetoB = {
    chaveB: 'eu sou a chave B'
}

Object.setPrototypeOf(objetoB, objetoA);
console.log(objetoB.chaveA)*/


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function() {
    this.preco = this.preco - (this.preco * 0.10);
}

const p2 = { 
    nome: 'Notebook Acer Nitro 5',
    preco: 5500
}

Object.setPrototypeOf(p2, Produto.prototype);

const p1 = new Produto('Notebook dell Inspiron 15', 6700);
p2.desconto()
p1.desconto()
console.log(p1)
console.log(p2)