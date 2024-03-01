let interval = setInterval(()=>{
    console.log(new Date())
}, 1000)

setTimeout(()=> clearInterval(interval), 5*1000)

//quantidade de tempo sempre vem depois da vírgula do penúltimo escopo