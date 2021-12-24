// Validando CPF em JavaScript
//CPF = 705.484.450-52, 070.987.720-03

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfConfigurado', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfConfigurado === 'undefined') return false
    if(this.cpfConfigurado.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfConfigurado.slice(0, -2);  //fatiar
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfConfigurado;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo --;      
        return ac;
    }, 0);

    const digito = 11 - (total % 11);  
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfConfigurado[0].repeat(this.cpfConfigurado.length)
    return sequencia === this.cpfConfigurado;
}

const cpf = new ValidaCPF('705.484.450-52');
//console.log(cpf.valida());

if(cpf.valida()) {
    console.log('CPF Válido');
} else {
    console.log('CPF inválido');
}