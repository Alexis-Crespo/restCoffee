const {model, Schema} = require('mongoose');

const usuarioSchema = Schema({
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true, 'El email es obligatorio']
    },
    password:{
        type:String,
        required:[true, 'El password es obligatorio']
    },
    google:{
        type:Boolean,
        default:false
    },
    role:{
        tpye:String,
        
        enum:['ADMIN_ROLE', 'USER_ROLE']
    },
    img:{
        type:String
    },
    estado:{
        type:Boolean,
        default:true
    }
})


module.exports= model('Usuario', usuarioSchema )