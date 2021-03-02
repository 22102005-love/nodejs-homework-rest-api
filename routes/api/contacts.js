const express = require('express')
const router=express.Router()
const validate = require('./validation')
const contactController=require('../../controllers/contacts')

router.get('/', contactController.listContacts)
router.post('/',validate.createContact,contactController.addContact)
router.get('/:id', contactController.getContactById)
router.delete('/:id', contactController.removeContact)
router.patch('/:id',validate.updateContact,contactController.updateContact)

module.exports=router