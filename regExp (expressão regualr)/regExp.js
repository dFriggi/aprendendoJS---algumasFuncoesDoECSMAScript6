//regExp == regular expression
// usamos para encontrar uma string dentro de um texto a partir de algum parâmetro/padrão
//Maneira 1:
var r = new RegExp(/asdf/ , 'g')/*primeiro vem a string com a exp regular (/asdf/)
depois vem os atributos: 'g' = global, procura em todos os textos; 'i' = ignorar;
'm' = multiplas linhas*/

//Maneira 2 (mais usada):
var regexp = /asdf/gum/*da mesma maneira porém sem o new*/