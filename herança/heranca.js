class Animal{
    constructor(nome){
        this.nome = nome
    }

    comunicacao (){
        return this.nome + " fez barulho"
    }
}

class Cachorro extends Animal { //extends puxa características da classe escolhida(Animal)
    comunicacao(){
        return this.nome + " latiu"
    }
}

class Gato extends Animal {
    comunicacao(){
        return this.nome + " miou"
    }
}

let a = new Animal('chubacca')
let c = new Cachorro('tobi')
let g = new Gato('garfield')

console.log(a.comunicacao())
console.log(c.comunicacao())
console.log(g.comunicacao())