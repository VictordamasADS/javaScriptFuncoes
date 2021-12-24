//Polimorfismo com função construtora 

//Classe Pai
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

//metodos
Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente, seu saldo é R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    console.log(`Voce realizou um saque no valor de R$${valor.toFixed(2)}`);
    this.consultarSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    console.log(`Voce realizou um depósito de R$${valor.toFixed(2)}`);
    this.consultarSaldo();
}

Conta.prototype.consultarSaldo = function() {
    console.log(`Agência: ${this.agencia} Conta: ${this.conta} Saldo: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

//herança da classe pai
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente, seu saldo é R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    console.log(`Voce realizou um saque no valor de R$${valor.toFixed(2)}`);
    this.consultarSaldo();
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

//herança da classe pai
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente, seu saldo é R$${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    console.log(`Voce realizou um saque no valor de R$${valor.toFixed(2)}`);
    this.consultarSaldo();
}

const conta1 = new ContaPoupanca(1392, 91196, 0)
conta1.depositar(1000)
conta1.sacar(100)

/*
const conta2 = new ContaCorrente(1392, 91196, 0, 100)
conta2.depositar(100)
conta2.sacar(200)
conta2.depositar(200)*/