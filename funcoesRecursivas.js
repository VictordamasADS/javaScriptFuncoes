//recursive function: a função chama ela mesma, com uma ordem de parada.
function recursiva(max) {
    if(max >= 10) return;
    max ++;
    console.log(max);
    recursiva(max);
}

recursiva(0)