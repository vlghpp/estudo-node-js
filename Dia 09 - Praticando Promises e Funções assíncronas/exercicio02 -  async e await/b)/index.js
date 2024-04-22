/*
Uso de Async/Await:
a. Escreva uma função assíncrona que aguarde 3 segundos e, em seguida, retorne "Finalizado!".
b. Crie uma função que aguarde o resultado de duas promises e retorne a soma dos valores resolvidos.
*/

async function exercicioB(){
    const promise1 = new Promise((resolve, reject) => {
        resolve(10)
    })

    const promise2 = new Promise((resolve, reject) => {
        resolve(23)
    })

    const resultado1 = await promise1
    
    const resultado2 = await promise2

    return resultado1 + resultado2
}

exercicioB().then(resultado => {
    console.log("A soma das soluções das promises é de: ", resultado)
}).catch(error => {
    console.log("Houve um erro: ", error)
})