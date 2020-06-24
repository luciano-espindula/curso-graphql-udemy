const { perfis, proximoIdp } = require('../../data/db')

function indicePerfil(filtro) {
    if (!filtro) return -1
    const { id, nome } = filtro
    if (id) {
        return perfis.findIndex(p => p.id === id)
    } else if (nome) {
        return perfis.findIndex(p => p.nome === nome)
    }
    return -1
}

module.exports = { 
    // nome
    novoPerfil(_, { dados } ) {
        const nomeExistente = perfis.some(p => p.nome === dados.nome)

        if (nomeExistente) {
            throw new Error('Perfil informado já cadastrado. ' + dados.nome)
        }

        const novo = {
            id: proximoIdp(),
            ...dados
        }
        perfis.push(novo)
        return novo
    },

    excluirPerfil(_, { filtro }) {
        const i = indicePerfil(filtro)

        if (i < 0) return null
        const excluidos = perfis.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },

    alterarPerfil(_, { filtro, dados }) {
        const i = indicePerfil(filtro)
        if (i < 0) return null

        const perfil = {
            ...perfis[i],
            ...dados
        }
        perfis.splice(i, 1, perfil)

        return perfil

        //LAE - ou também pode fazer assim mas aí precisa se preocupar com os novos valores null 
        // perfis[i].nome = args.nome
        // perfis[i].email = args.email
        // if (args.idade) {
            // perfis[i].idade = args.idade
        // }
        // return perfis[i] 
    }
}