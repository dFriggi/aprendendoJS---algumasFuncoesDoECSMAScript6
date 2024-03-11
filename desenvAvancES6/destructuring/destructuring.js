//sem o DESTRUCTURING ASSIGMENT
let array = ['apple', 'banana', 'orange']

let apple = array[0]
let banana = array[1]
let orange = array[2]

//Usando o DESTRUCTURING ASSIGNMENT

let [apple2, banana2, orange2] = ['apple' , 'banana' , 'orange']

console.log(apple, apple2)

//também funciona pra objetos
let obj = {
    name: 'davi',
    props:{
        age: 18,
        colors: ['red', 'blue']
    }
}

let {props: { age: age2, colors: [color1, color2] }} = obj;

console.log(age2, color1, color2)

//também funciona para pegar objetos dentro de arrays

let arr = [{nome: 'pedro', idade: 12}]

let [{nome: nome2, idade: idade2}] = arr

console.log(nome2, idade2)


//funciona para argumento de uma função também

function sum([a, b] = [0,0]/*default value para determinar os valores quando não existirem*/){
    return a+b
}

console.log(sum([5,5]))