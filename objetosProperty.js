// property = propriedade and properties = propriedades

// defineProperty
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false, //gravavél alterar o valor
        configurable: false 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true, 
            configurable: true
        },
    })
}

const p1 = new Produto('Apple Watch 7', 4500, 10)
console.log(p1)