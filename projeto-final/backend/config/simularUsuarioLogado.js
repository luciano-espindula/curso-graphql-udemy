const db = require('./db')
const { getUsuarioLogado } = require('../resolvers/comum/usuario')

const sql = `
    select u.*
    from
        usuarios u
        join usuarios_perfis up on
            up.usuario_id = u.id
        join perfis p on
            p.id = up.perfil_id and
            p.nome = :nomePerfil
    where
        u.ativo = 1
    limit 1
`

const getUsuario = async nomePerfil => {
    const res = await db.raw(sql, { nomePerfil })
    return res ? res[0][0] : null
}

module.exports = async req => {
    const usuario = await getUsuario('admin')
    if (usuario) {
        const { token } = await getUsuarioLogado(usuario)
        req.headers = { 
            authorization: `Bearer ${token}`
        }
    }
}