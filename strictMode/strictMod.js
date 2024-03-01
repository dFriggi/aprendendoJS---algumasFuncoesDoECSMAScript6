'use strict'

pessoa ={
    nome: 'Davi',
    idade: 18,
    genero: 'M'
}

console.log(pessoa)
delete pessoa.nome
console.log(pessoa)//dessa maneira da errado pois é necessário declarar 'pessoa'
//também é possível utilizar o strict mode dentro de funções