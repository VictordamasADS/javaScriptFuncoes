// Factory Functions in JS
//Exemplo 1:
/*
function pessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${nome} ${sobrenome} está ${assunto}.`;
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);    //paraFixo(2)
        }
    };
}

const p1 = pessoa('João', 'Victor', 1.75, 71);
console.log(`Seu IMC é: ${p1.imc()}`);
console.log(p1.fala('falando sobre JavaScript'));*/


//Exemplo 2:
// Factory function (Função de fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
    
    // Getter
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    
    // Setter
    set nomeCompleto(valor) {
        valor = valor.split(' ');  // dividir
        this.nome = valor.shift();  // mudança
        this.sobrenome = valor.join(' ');  // juntar
    },
    
    fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,
   
    // Getter
    get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
        }
    };
}
  
const p1 = criaPessoa('João', 'Victor', 1.75, 71);
const p2 = criaPessoa('Elle', 'London', 1.60, 57);
const p3 = criaPessoa('Marie', 'Clara', 1.63, 56);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);