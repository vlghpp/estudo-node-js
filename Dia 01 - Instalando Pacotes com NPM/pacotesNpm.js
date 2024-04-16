//Usando o Pacote instalado



//Esse var validator = require('validator') significa que eu estou requisitando o pacote validator e quando crio essa variável e como se eu estivesse
//instanciando um objeto da classe validator, então consigo acessar todos métodos dentro da classe validator

var validator = require('validator')
let email = "henrique@gmail.com"

//Essa é uma validação para testar se o email que está sendo passado é um email, se for ele retornará true, senão, retornará false
//Também só pode ser passado strings como parâmetro, se for passado outro tipo de variavel ele não rodará e dará erro.
console.log(validator.isEmail(email))