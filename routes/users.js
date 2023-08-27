const {Router} = require('express');

const { getUser, postUser, deleteUser, putUser } = require('../controllers/users');
const { check } = require('express-validator');
const { validaEmail } = require('../middlewares/validaCampos');

const router = Router();

router.get('/', getUser)

router.post('/',
[
    check('nombre', 'El nombre no puede estar vacio').not().isEmpty(),
    check('email', 'El correo no es valido..').isEmail(),
    check('password', 'El password debe contener minimo 6 caracteres').isLength({min:6}),
    check('role', 'El role debe coincidir con alguno de los parametros').isIn('ADMIN_ROLE', 'USER_ROLE'),
    validaEmail
],
 postUser)

router.delete('/', deleteUser)

router.put('/:id', putUser)


module.exports = router;