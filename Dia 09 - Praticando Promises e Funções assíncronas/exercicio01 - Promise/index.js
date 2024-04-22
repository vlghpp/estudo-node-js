/*
Promises Básicas:
a. Crie uma promise que resolva para um número aleatório depois de 1 segundo.
b. Crie uma promise que rejeite com uma mensagem de erro depois de 2 segundos.
c. Encadeie duas promises: a primeira deve resolver para um número aleatório e a segunda deve dobrar esse número.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1
        if(numeroAleatorio > 0.5){
            resolve(numeroAleatorio)
        }else{
            reject("O número gerado é menor ou igual a 0.5")
        }
    }, 1000);
})

promise.then((resultado) => {
    console.log("A promise foi resolvida com sucesso, este é o número gerado: ", resultado)
    return resultado
})
.then((resultado) => {
    const dobraResultado = resultado * 2
    console.log("O dobro do número aleatório é: ", dobraResultado)
})
.catch(error => {
    console.error("A promise foi rejeitada este é o erro: ", error)
})