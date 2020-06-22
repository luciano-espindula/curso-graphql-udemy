const { usuarios, perfis } = require("../data/db")

module.exports = { 
    ola() {
        return 'Basta retornar uma string2'
    },

    horaAtual() {
        //return `hora: ${new Date}`
        return new Date
    },

    usuarioLogado(obj) {
        console.log(obj)
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'anadaweb@email.com',
            idade: 23,
            salario_real: 1234.56,
            vip: true
        }
    },

    produtoEmDestaque() {
        return {
            nome: 'Not',
            preco: 4000,
            desconto: 15
        }
    },

    numerosMegaSena() {
        //return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b
        return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)
    },

    usuarios() {
        return usuarios
    },
    // usuario(_, args) { -> trocando args por parâmetro direto com o campo do filtro
    usuario(_, { id }) {
        // const sels = usuarios.filter(u => u.id == args.id) 
        const sels = usuarios.filter(u => u.id === id)
        return sels ? sels[0] : null
    },

    perfis() {
        return perfis
    },

    perfil(_, { id }) {
        const sels = perfis.filter(p => p.id === id)
        return sels ? sels[0] : null
    }
}