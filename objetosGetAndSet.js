// defineProperty - Getter and Setters 
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivate = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivate;
        },
        set: function(valor) {
            estoquePrivate = valor
        }
    });
}

function criaProduto() {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

//const p1 = new Produto('Notebook Dell', 5400, 7);
//p1.estoque = 'eu sou a definição'
//console.log(p1.estoque)

const p2 = criaProduto('Tesla model 3')
p2.nome = 'Hello'
console.log(p2.nome) 