const apiUser = require('../api/user')

const express = require('express')

const router = express.Router()

router.get('/', apiUser.findAll)
router.get('/:id', apiUser.findById)
router.post('/', apiUser.create)
router.put('/:id', apiUser.update)
router.delete('/:id', apiUser.delete)

module.exports = router