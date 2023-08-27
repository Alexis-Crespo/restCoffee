const Usuario = require("../models/usuario")



const getUser = (req, res) => {
    res.json({
        msg:'get ok'
    })
}
const postUser = async(req, res) => {
    const body = req.body
    const usuario = Usuario(body)
    
    // Guardando el user
    await usuario.save()

    res.json({
        msg:'post ok',
        usuario
    })
}
const putUser = (req, res) => {
    const id = req.params.id;
    
    res.json({
        msg:'put ok',
        id
    })
}
const deleteUser = (req, res) => {
    res.json({
        msg:'delete ok'
    })
}

module.exports = {
    getUser,
    postUser,
    deleteUser,
    putUser
}