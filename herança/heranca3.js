let Animal = {
    comunicar(){
        console.log(this.nome + 'faz barulho')
    }
}

class Cachorro{
    constructor (nome){
        this.nome = nome
    }
}
//a classe Cachorro vai tirar uma propriedade da variável Animal
Object.setPrototypeOf(Cachorro.prototype, Animal)

let c = new Cachorro('chubaca')
c.comunicar()