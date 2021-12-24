// Calculadora em JavaScript usando factory Functions
function criaCalculadora() {
    return {
        //Atributos
        display: document.querySelector('.display'), // seletor de consulta de documento

        iniciar() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        //Metodos
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida');
                return;
            }
            this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => { //quando a chave for solta,
                if(e.keyCode === 13) {  //se o código da chave for 13 que é igual a enter,
                    this.realizaConta();   //a conta é realizada.
                }
            });
        },

        clearDisplay() {
            this.display.value = '';  // limpar o valor de exibição
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0,-1); //fatia um valor do display
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) { //adicionar ouvinte de evento(clicar)
                const alvo = e.target;

                if(alvo.classList.contains('btn-num')) {
                    this.btnParaDisplay(alvo.innerText);  //texto interno do alvo, para a exibição.
                    this.display.focus();  //volta o foco para o display
                }

                if(alvo.classList.contains('btn-clear')) {
                    this.clearDisplay();   //se o alvo contem a classe btn-clear, limpe a exibição
                }

                if(alvo.classList.contains('btn-del')) {
                    this.deleteOne();  //se o alvo contem a classe btn-del, apague 1.
                }

                if(alvo.classList.contains('btn-eq')) {
                    this.realizaConta();  //se o alvo contem a classe btn-eq, mostre o resultado
                }

            }.bind(this)); //ligar 
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.iniciar();


/*
//Calculadora usando Função Construtora
function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.realizaConta = () => {
    try {
        const conta = eval(this.display.value);
        if (Number.isNaN(conta) || typeof conta !== 'number') {
            alert('Conta inválida');
            return;
      }
      this.display.value = conta;
    } catch(e) {
        alert('Conta inválida');
        return;
    }
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();
*/