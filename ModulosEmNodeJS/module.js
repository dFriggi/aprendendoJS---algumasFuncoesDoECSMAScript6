let m = require('./mensagens')
let { areaQuadrado , retangulo, pi} = require('./calculadora')

m.showInfoMessage(areaQuadrado(10))
m.showErrorMessage(retangulo(5,4))
console.log(pi)