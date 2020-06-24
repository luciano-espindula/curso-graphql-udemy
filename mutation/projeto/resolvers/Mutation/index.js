const usuario = require('./usuario')
const pervil = require('./perfil')

module.exports = {
    ...usuario,
    ...pervil,
}