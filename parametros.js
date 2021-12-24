// arguments salva todos os argumentos enviados, sem precisar de parametros.
function soma() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

soma(1,2,3,4,5,6,7,8,9);

// declarando parametros
function multiplicar(a, b) {
    console.log(a * b)
}

multiplicar(3,9)

//Exemplo1:
function pessoa([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
pessoa(['João', 'Victor', 25]);


//Exemplo2:
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('*', 1, 20,30,40,50);