const db = require('../config/db')

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visistante'
// }

// db('perfis').insert(novoPerfil)
// .then(res => console.log(res))
// .catch(err => console.log(err.sqlMessage))
// .finally(() => db.destroy())

const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuario'
}

let {id} = db.insert(perfilSU).into('perfis')
// .then(res => console.log(res[0]))
// .then(res => res[0])

// .then(id => `O código gerado foi ${id}`)
// .then(string => console.log(string))
.catch(err => console.log(err.sqlMessage))
console.log(id)
.finally(() => db.destroy())

