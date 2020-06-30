const db = require('../config/db')

// db('perfis')
//     // .then(res => console.log(res))
//     .then(res => res.map(p => p.nome))
//     // .map(p => p.nome)  //No meu fonte não funcionou
//     .then(nomes => console.log(nomes))
//     .finally(() => db.destroy())
    
// db('perfis').select('nome', 'id')
//     .then(res => console.log(res))
//     .finally(() => db.destroy())
    
// db.select('nome', 'id')
//     .from('perfis')
//     .limit(4).offset(2)
//     .orderBy('id')
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

// db('perfis')
//     .where({id: 2})
//     .first() //LAE tras um objeto.
//     .then(res => console.log(res.nome))
//     .finally(() => db.destroy())

db('perfis')
    // .where({id: 2})
    // .where('id', '=', 2)
    // .where('nome', 'like', '%root%')
    // .whereNot({id: 2})
    .whereIn('id', [1,2,3])
    // .first() //LAE Sem este comando traz um array
    .then(res => console.log(res))
    .finally(() => db.destroy())