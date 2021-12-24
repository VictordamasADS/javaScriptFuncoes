// Construction Function.
// a função construtora utiliza o (new). 

function Pessoa(nome, sobrenome) {
    // Privados
    const ID = 12345;   
    const metodoInterno = function() {
        console.log(ID)
        return metodoInterno;
    };

    metodoInterno();

    //Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': isso é um método');
    }
}

const p1 = new Pessoa('João', 'Victor');

console.log(p1.nome, p1.sobrenome);
p1.metodo()