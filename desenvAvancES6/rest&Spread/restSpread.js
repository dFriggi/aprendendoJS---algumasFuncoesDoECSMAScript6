/* rest operator = ... -> pega todos os parâmetros e transforma num array
spread operator = ... -> pega todos os elementos de um array e transforma em parâmetros
 */
function soma(...args) {//REST: está pegando os parâmetros e transformando em array
        return args.reduce((acc, value) => acc + value, 0)
}

console.log(soma(5,5,43,5,6,7))

/* Trabalhando com arrow functions também temos que usar o rest para funcionar; Podemos utilizar também
para pegar o resto de elementos de um array como um parâmetro
*/ 

const sum = (a, b, ...rest) => {
    console.log(a, b, rest)
}

sum(3,4,6,7,8,9)

let multiply = (...args) => args.reduce((acc, value) => acc*value, 1) 

let soma1 = (...rest) => multiply(...rest)//SPREAD: está mandando os elementos de soma1 para o multiply

console.log(soma1(2,3,4))


/*Spread funciona em strings, arrays, objects literais e objetos iteráveis
*/

let string = 'Universidade Federal do Estado de São Paulo'
let array = [1,2,3,4,5]
let array2 = [...array,6,7,8,9,10]//SPREAD pra integrar itens dentro de um outro array também

function logArgs (...args){//REST
    console.log(args)
}

logArgs(...string)//SPREAD
logArgs(...array)

console.log(array2)

//SPREAD também funciona para adicionar métodos ja existentes de outros objetos
let obj1 = {
    nome: "seila"
}

let obj2 = {//SPREAD puxou o método 'nome' do obj1
    ...obj1,
    idade: 39
}

console.log(obj2)

/*Não é possível criar arrays por meio de SPREADS de objetos, porque eles não são iteráveis*/