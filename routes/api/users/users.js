const express = require('express')
const router = express.Router()
const validate = require('./validation')
const userController = require('../../../controllers/users.js')
const guard = require('../../../helpers/guard')

router.post('/register',validate.createUser, userController.reg)
router.post('/login',validate.loginUser, userController.login)
router.post('/logout', guard, userController.logout)
router.get('/current',guard,userController.currentUser)

module.exports=router