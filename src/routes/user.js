const apiUser = require('../api/user')

const express = require('express')

const router = express.Router()

router.get('/', apiUser.findAll)
router.get('/:index', apiUser.findByIndex)
router.post('/', apiUser.create)
router.put('/:index', apiUser.update)
router.delete('/:index', apiUser.delete)

module.exports = router