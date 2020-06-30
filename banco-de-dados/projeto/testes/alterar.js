const db = require('../config/db')

const novoUsuario = {
    nome: 'Pedro',
    email: 'pedro@mail.com',
    senha: '12345678'
}

const novoUsuarioAlt = {
    nome: 'Pedro Garcia',
    email: 'pedrogarcia@mail.com'
}

//update... db('...).where({...}).update({...})

async function exercicio() {
    //count
    // const qtde = await db('usuarios')   //LAE apresenta -> RowDataPacket { qtde: 0 }
    const { qtde } = await db('usuarios')  //LAE apresenta o valor 
        .count('* as qtde').first()

    // inserir (se a tabela estiver fazia)
    if (qtde === 0) {
        await db('usuarios').insert(novoUsuario)         
    }

    // consultar
    let { id } = await db('usuarios')
        .select('id').limit(1).first()

    // alterar
    // await db('usuarios').where({ id: id} )
    await db('usuarios').where({ id } )
        // .update({ nome: 'Pedro Garcia' })
        .update(novoUsuarioAlt)

    return db('usuarios').where({ id })    
}

exercicio()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy())