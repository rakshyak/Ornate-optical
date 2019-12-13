const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is root from routes!!'))

router.post('/login/2', controllers.signIn)
router.post('/login/1', controllers.signUp)

router.post('/users', controllers.createUser)

router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)

router.post('/items', controllers.createItem)
router.get('/items', controllers.getAllItems)
router.get('/items/:id', controllers.getItemById)
router.put('/items/:id', controllers.updateItem)
router.delete('/items/:id', controllers.deleteUser)

router.get('/glasses-men', controllers.getItemsMen)
router.get('/glasses-women', controllers.getItemsWomen)

router.post('/items/:id', controllers.createReview)
router.put('/reviews/:id', controllers.updateReview)
module.exports = router