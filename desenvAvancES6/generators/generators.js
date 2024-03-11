function* hello (){ //colocar o asterisco
    console.log('Hello')
    yield 1// aqui ele cria uma pausa para a execução do escopo da função, e pode ser acessado utilizando o 'next()'

    console.log('From')
    let value = yield 2//o número retorna um valor como value na iteração

    console.log(value)
}

const it = hello()
console.log(it.next())
console.log(it.next())
console.log(it.next('Outside!'))

function* naturalNumbers(){
    let number = 0
    while (true) {
        yield number
        number++        
        console.log(`O número é ${number}`)
    }
}

const it2 = naturalNumbers()
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())