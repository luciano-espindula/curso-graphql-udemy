const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/perfil')
const { usuario: obterUsuario } = require('../Query/usuario')

module.exports = {
    async novoUsuario(_, { dados }) {
        try {
            const idsPerfis = []
            // pegar os perfis do filtro
            if (dados.perfis) {
                for (let filtro of dados.perfis) {
                    const perfil = await obterPerfil(_, { filtro })
                    if (perfil) idsPerfis.push(perfil.id)
                }
            }
            // Excluir esta coluna pois ela não existe no DB
            delete dados.perfis

            const [ id ] = await db('usuarios')
                .insert(dados)

            for (let perfil_id of idsPerfis) {
                await db('usuarios_perfis')
                    .insert( { perfil_id, usuario_id: id})
            }
            return db('usuarios')
                .where({ id }).first()
        }
        catch(e) {
            throw new Error(e.sqlMessage)
        }
    },
    async excluirUsuario(_, { filtro }) {
        try {
            const usuario = await obterUsuario(_, { filtro })
            if (usuario) {
                const { id } = usuario
                await db('usuarios_perfis')
                    .where({ usuario_id: id}).delete()
                await db('usuarios')
                    .where({ id }).delete()
            }
            return usuario
        }
        catch(e) {
            throw new Error(e.sqlMessage)
        }
    },
    async alterarUsuario(_, { filtro, dados }) {
        try {
            const usuario = await obterUsuario(_, { filtro })
            if (usuario) {
                const { id } = usuario
                // pegar os perfis do filtro
                await alterarPerfis(dados, id)
                // Excluir esta coluna pois ela não existe no DB
                delete dados.perfis
                await db('usuarios').where({ id }).update(dados)
            }
            return !usuario ? null : {...usuario, ...dados } 
        }
        catch(e) {
            throw new Error(e)
        }
    }
}

async function alterarPerfis(dados, id) {
    if (dados.perfis) {
        await db('usuarios_perfis')
            .where({ usuario_id: id }).delete()

        for (let filtro of dados.perfis) {
            const perfil = await obterPerfil(null, { filtro })
            if (perfil) {
                await db('usuarios_perfis').insert({ perfil_id: perfil.id, usuario_id: id })
            }
        }
    }
}
