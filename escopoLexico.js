// Escopo léxico de funções 
const nome = 'João Victor';

function meuNome() {
    console.log(nome);
}

function usarMeuNome() {
    const nome = 'Victor';
    meuNome();
}

usarMeuNome();