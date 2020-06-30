const db = require('../../config/db')

module.exports = {
    usuarios(perfil) {
        if (!perfil) return null
        return db('usuarios')
            .join(
                'usuarios_perfis',
                'usuarios_perfis.usuario_id',
                'usuarios.id'
            )
            .where({ perfil_id: perfil.id })
    }
}