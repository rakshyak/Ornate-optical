const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

const restrict = require('../helpers')

router.get('/', (req,res) => res.send('This is root from routes!!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)

router.post('/users', controllers.createUser)
router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)


module.exports = router;