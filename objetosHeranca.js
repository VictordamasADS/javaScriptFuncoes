// Eletronicos -> desconto
// Notebook

function Eletronicos(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Eletronicos.prototype.desconto = function() {
    this.preco = this.preco - (this.preco * 0.10);
}

function Notebook(nome, preco, hardware, garantia) {
    Eletronicos.call(this, nome, preco);
    this.hardware = hardware;
    this.garantia = garantia;
}

Notebook.prototype = Object.create(Eletronicos.prototype)

const notebook1 = new Notebook('Notebook Dell G3', 5000, 'I5 8GB 512SSD', '12 meses');
notebook1.desconto();
console.log(notebook1);