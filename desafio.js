// cadastro de projetos com funções em JS
const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
const display3 = document.querySelector('.display3')
const display4 = document.querySelector('.display4')
const display5 = document.querySelector('.display5')
const display6 = document.querySelector('.display6')

const btnEnviar = document.querySelector('.btn-enviar');
const salvar = document.querySelector('.salvar');

const mensagem = document.querySelector('.sucesso');
const erro = document.querySelector('.erro');

const procurar = document.querySelector('.procurar');
const btnProcurar = document.querySelector('.btn-procurar');

function criaLista() {
    const li = document.createElement('li');
    li.setAttribute('class', 'projeto');
    return li;
}

function criaProjetos(textoInput) {
    const li = criaLista();
    li.innerHTML = textoInput;
    salvar.appendChild(li) 
    deleteButton(li);
    salvarProjetos();
    limpaInput();
}

function deleteButton(li) {
    li.innerText += ' ';
    const apagar = document.createElement('button');
    apagar.innerText = 'Apagar';
    apagar.setAttribute('class', 'apagar'); 
    li.appendChild(apagar);
}

function limpaInput() {
    display1.value = '';
    display2.value = '';
    display3.value = '';
    display4.value = '';
    display5.value = '';
    display6.value = '';
}

btnEnviar.addEventListener('click', function() {
    if(display1.value && display2.value && display3.value && display4.value && display5.value && display6.value) {
        criaProjetos(`<p>Nome: (${display1.value}) <p>Duração: (${display2.value}) <p>Gerente: (${display3.value}) <p>Descrição: (${display4.value}) <p>Custo: (${display5.value}) <p>Cidade: (${display6.value})`)
        limpaErro();
        mensagem.innerText = ('Cadastro Realizado.');
        return
    } 
    limpaMensagem();
    erro.innerText = ('Argumentos Obrigatórios não preenchidos.');
});

function limpaMensagem() {
    mensagem.innerText = '';
}

function limpaErro() {
    erro.innerText = '';
}

document.addEventListener('click', function(elemento) {
    const alvo = elemento.target 
    if(alvo.classList.contains('apagar')) { 
        alvo.parentElement.remove();
        salvarProjetos();  
    }
});

function salvarProjetos() {
    const todosProjetos = salvar.querySelectorAll('li');
    const listaDeProjetos = []; 

    for (let conteudo of todosProjetos) {
        let textos = conteudo.innerText;
        textos = textos.replace('Apagar', '').trim(); 
        listaDeProjetos.push(textos); 
    }

    const projetosJSON = JSON.stringify(listaDeProjetos); 
    localStorage.setItem('salvar', projetosJSON);
}

function projetosSalvos() {
    const adiociona = localStorage.getItem('salvar');
    const listaDeProjetos = JSON.parse(adiociona) 
    
    for (let projetos of listaDeProjetos) {
        criaProjetos(projetos);
    }
}; 

projetosSalvos();