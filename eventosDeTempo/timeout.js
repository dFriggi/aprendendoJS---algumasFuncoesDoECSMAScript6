for (let i = 0; i < 1000; i++) {
    console.log(i)
}

 var timeout = setTimeout(function(){
    console.log('terminou')
}, 1000 * 5)

setTimeout(function(){
    clearTimeout(timeout)
}, 1000 * 4)