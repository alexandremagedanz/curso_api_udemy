const apiPerson = require('../api/person')

const express = require('express')

const routerPerson = express.Router()

routerPerson.get('/', apiPerson.findAll)
routerPerson.get('/:id', apiPerson.findById)
routerPerson.post('/', apiPerson.create)
routerPerson.put('/:id', apiPerson.update)
routerPerson.delete('/:id', apiPerson.delete)
module.exports = routerPerson