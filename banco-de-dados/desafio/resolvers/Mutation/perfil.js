const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/perfil')

module.exports = {
    async novoPerfil(_, { dados }) {
        let filtro = {id: null, nome: dados.nome}
        const perfil = await obterPerfil(_, { filtro })
        
        if (perfil) {
            throw new Error(`Perfil informado já cadastrado. ${dados.nome}`)
        }
        try {
            const [ id ] = await db('perfis')
                .insert({ ...dados })
            return db('perfis')
                .where({ id }).first()
        }
        catch(e) {
            throw new Error(e.sqlMessage)
        }
    },

    async excluirPerfil(_, { filtro }) { //{ filtro } -> args pode ser usado assim também
        try {
            const perfil = await obterPerfil(_, { filtro })

            if (perfil) {
                const { id } = perfil
                await db('usuarios_perfis')
                    .where( { perfil_id: id }).delete()
                await db('perfis')
                    .where( { id }).delete()
            }
            return perfil
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    },

    async alterarPerfil(_, { filtro, dados }) {
        try {
            const perfil = await obterPerfil(_, { filtro })

            if (perfil) {
                const { id } = perfil
                await db('perfis')
                    .where( { id })
                    .update(dados)
            }
            return { ...perfil, ...dados }
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    }
}