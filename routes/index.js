const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req,res) => res.send('This is root!!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
