// funções de fabrica mais prototipos
function eletronicos(nome, preco, aplicativo) {
    const metodos = {
        ligar() {
            console.log(`${this.nome} está ligado.`)
        },
        programar() {
            console.log(`${this.nome} está rodando os códigos.`)
        },
        utilizar() {
            console.log(`${this.nome} está utilizando o ${this.aplicativo}.`)
        }
    };
    
    return Object.create(metodos, {
        nome: { value: nome },
        preco: { value: preco },
        aplicativo: { value: aplicativo },
    });
}

const notebook = eletronicos('Notebook Inspiron 15', 6700, 'VS Code');
notebook.ligar()
notebook.utilizar()
notebook.programar()

//const iphone = eletronicos('Iphone 12', 6500, 'Instagram')
//iphone.ligar()
//iphone.utilizar()