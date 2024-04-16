//Instancio meu objeto chamado calculadora, requerindo o código de calculadora.js (arquivo onde estão as funções de somar/diminuir/multiplicar/dividir)

let calculadora = require('./calculadora.js')

console.log(calculadora.somar(2,3))
console.log(calculadora.diminuir(5,3));

//Note que caso eu tente rodar o código abaixo ele dará um erro, pois eu n exportei essa função "dividir()" la em calculadora.js
//console.log(calculadora.dividir(3,1));

