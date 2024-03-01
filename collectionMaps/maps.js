//map -> coleção de dados

let map = new Map()//tem chave e valor

map.set('nome' , 'Davi')
map.set('idade' , 18)
map.set('genero' , 'M')
console.log(map.get('genero'))//mostra o genero
map.delete('genero')//deletou o genero
console.log(map.get('genero'))//undefined

console.log(map)
console.log(map.get('idade'))//get pega um específo
map.clear()//limpou o mapa
console.log(map)
/*métodos:
clear = limpar; delete = deletar; has = retorna boolean;
size = mostra a quantidade de objs; values = mostra os valores
*/

