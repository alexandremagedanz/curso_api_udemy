const apiUser = require('../api/user')

const express = require('express')

const routerUser = express.Router()

routerUser.get('/', apiUser.findAll)
routerUser.get('/:id', apiUser.findById)
routerUser.post('/', apiUser.create)
routerUser.put('/:id', apiUser.update)
routerUser.delete('/:id', apiUser.delete)

module.exports = routerUser