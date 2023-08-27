const {Router} = require('express');

const { getUser, postUser, deleteUser, putUser } = require('../controllers/users');

const router = Router();

router.get('/', getUser)

router.post('/', postUser)

router.delete('/', deleteUser)

router.put('/:id', putUser)


module.exports = router;