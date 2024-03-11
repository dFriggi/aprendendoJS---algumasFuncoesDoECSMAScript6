let map = new Map([
    ['nome' , 'Davi'],//['chave', 'valor']
    ['idade' , 18],
    ['genero' , 'M']
])

console.log(map.keys() , map.values())

map.forEach((value, chave, mapa) => {
    let valores = value
    console.log(valores)
})