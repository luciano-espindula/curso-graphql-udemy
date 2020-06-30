const db = require('../../config/db')

module.exports = {
    perfis(usuario) {
        if (!usuario) return null
        return db('perfis')
            .join(
                'usuarios_perfis',
                'usuarios_perfis.perfil_id',
                'perfis.id'
            )
            .where({ usuario_id: usuario.id })
    }
}