const bcrypt = require('bcryptjs')

const Usuario = require("../models/usuario")
const { validationResult } = require('express-validator')



const getUser = (req, res) => {
    res.json({
        msg:'get ok'
    })
}
const postUser = async(req, res) => {
    


    const {nombre, email, password, role} = req.body
    const usuario = Usuario({nombre, email, password, role})
    
    // Confirmamos si el email ya existe


    // Hash el password

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt)

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