function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (segundos % 2 === 0) {
                // resolve permita passar apenas um parâmetro e volta para o then
                resolve(frase)
            } else // reject permita passar apenas um parâmetro e volta para o catch
            reject('Erro')
        }, segundos * 1000)
    })
}

// falarDepoisDe(3, 'Que legar!') //3 -> para passar no reject
falarDepoisDe(4, 'Que legal!') //4 -> para passar no resolve
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))