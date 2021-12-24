//generator function: utiliza * na chamada da função
//o yield diferente do return executa os código abaixo.

function* geradora1() {
    yield 'Primeiro valor';
    yield 'Segundo valor';
    yield 'Terceiro valor';
}

const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}

function* geradora2() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3() {
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

const g3 = geradora3();
for (let num of g3) {
    console.log(num)
}