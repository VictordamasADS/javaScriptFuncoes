/*
Object.values
Object.entries
Object.assign(des,any)
Object.getOwnPropertyDescriptor(o, 'prop')

Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
object.defineProperties(define várias propriedades)
object.defineProperty(define uma propriedade)
*/ 

const carro = {nome: 'BMW Series 3 Hybrid', preco: '$40.000'};
//const produto = Object.assign({}, carro, {performace: '600KM'})
//console.log(Object.getOwnPropertyDescriptor(carro, 'nome'))


const produto = { 
    ...carro,
    combustivel: 'Energia Eletrica',
    performance: '100%: 600KM'
}

produto.nome = 'Tesla Model 3';
produto.preco = '$40.000'
console.log(produto)