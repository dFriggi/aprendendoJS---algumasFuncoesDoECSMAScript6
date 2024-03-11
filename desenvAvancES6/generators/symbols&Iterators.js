//Symbols são maneiras de gerar identificadores únicos7
//não pode ser invocado usando 'new', é invocado igual uma função
const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('Hello')

console.log(uniqueId === uniqueId2)//não são iguais = identificadores únicos

//usados para gerar propriedades privadas
let obj = {
    [uniqueId]: 'Hello'
}

console.log(obj)
//Well known symbols
Symbol.iterator

let arr = [1,2,3,4]

const obj2 = {
    values: [1,2,3,4,5],
    [Symbol.iterator]() {
        let i = 0

        return {
            next: () => {
                i++
                return{
                    value: this.values[i-1],
                    done: i > this.values.length
                }
            }
        }
    }
}
//isso torna o objeto iterável

for (const value of obj2) {
    console.log(value)
}

const arr2 = [...obj2]//agora o SPREAD se torna possível, por ser um objeto iterável
console.log(arr2)

//utilizando os generators visto no outro arquivo, ficaria assim:
const obj3 = {
    values: [1,2,3,4,5],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
}
//utilizando o * na função e o yield
for (const value of obj3) {
    console.log(value)
}