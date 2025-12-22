const servicePerson = require("../services/person")

class apiPerson {
    async findAll(_, res) {
        try {   
            const result = await servicePerson.findAll()
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async findById(req, res) {
        try {
            const {id} = req.params
            const result = await servicePerson.findById(id)
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async create(req, res) {
        try {
            const {name, address, userId} = req.body
            await servicePerson.create(name, address, userId)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async update(req, res) {
        try {
            const {name, address} = req.body
            const {id} = req.params
            const result = await servicePerson.update(id, name, address)
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            await servicePerson.delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new apiPerson();