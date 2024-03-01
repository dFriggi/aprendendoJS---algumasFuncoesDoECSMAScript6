//set -> coleção de dados
//diferença para o map é que ele é chave única, diferente do map que é chave e valor
let s = new Set()

s.add(1)
s.add(2)
s.add('3')
s.add(true)

console.log(s)

s.delete('3')

console.log(s)

console.log(s.has('2'))
console.log(s.keys() , s.values())

s.forEach((values) => {
    console.log(values)
})