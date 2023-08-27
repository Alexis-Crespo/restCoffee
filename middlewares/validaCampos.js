const { validationResult } = require("express-validator");


const validaEmail = (req, res) => {

const errors = validationResult(req);
    
if (!errors.isEmpty()){
    console.log('validate custom mid of email')
    return res.status(400).json(errors)
}

next()

}


module.exports = {
    validaEmail
}