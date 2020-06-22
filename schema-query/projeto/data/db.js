const perfis = [
    {id: 1, nome: 'Comum'}, 
    {id: 2, nome: 'Administrador'},
]

const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@mail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Rafa',
    email: 'rafa@mail.com',
    idade: 24,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Daniela Smith',
    email: 'dani@mail.com',
    idade: 19,
    perfil_id: 1,
    status: 'BLOQUEADO'
}
]

module.exports = { usuarios, perfis }