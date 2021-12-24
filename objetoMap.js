const pessoas = [
    { id: 3, nome: 'João'},
    { id: 2, nome: 'Elle'},
    { id: 1, nome: 'Kaly'},
]

const novasPessoas = new Map();

for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas.get(3)); //obter por id

/*
for(const pessoas of novasPessoas.values()) {
    console.log(pessoas)
}*/

//novasPessoas.delete(2)
//console.log(novasPessoas)