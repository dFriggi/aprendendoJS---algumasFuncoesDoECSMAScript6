//CEP = 00000-000

//[0-9][123][a-z][A-Z][asd]{ASD}
//número de x a y; numeros especificos; mesma coisa com letras maiúsculas e minúsculas

let regexp = /[0-9]{5}-[0-9]{3}/ //sem nenhum atributo ele só retorna o primeiro CEP

var string = 'Meu cep é 21345-000 e finaliza <b>aqui</b>, mas o do meu amigo é 65432-789'

//console.log(
//    regexp.exec(string),
//    string.match(regexp),
//    string.match(/[0-9]{5}-[0-9]{3}/)
//)

let regex = /\d{5}-\d{3}/g //já esse tem o atributo global(g)
/*meta caracteres: \d = digito; \D = tudo que não é dígito; * - serve para parar
quando encontrar um valor diferente do pedido = (\D* - para quando encontrar um dígito);
\w = procura palavras; \W = não caractere; . = qualquer texto*/
//console.log(
//    regex.exec(string),
//    string.match(regex),
//    string.match(/[0-9]{5}-[0-9]{3}/g)
//)

//para usar caractere expecial basta usar a contra barra = \
let regexpA = /<b>.*<\/b>/
let regexpB = /<b>(.*)<\/b>/ //com parênteses pega só o texto dentro do <b></b>
/*caso queira outras tags, só usar [bi], por exemplo, ou utilizar [a-z] direto
caso tenha espaço (' ') na tag, só o usar o . no lugar da tag (<.*>)*/
console.log(
    regexpA.exec(string),
    string.match(regexpB),
)