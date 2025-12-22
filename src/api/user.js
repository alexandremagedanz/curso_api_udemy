const serviceUser = require("../services/user")

class apiUser {
    findAll(_, res) {
        try {   
            const result = serviceUser.findAll()
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    findByIndex(req, res) {
        try {
            const {index} = req.params
            const result = serviceUser.findByIndex(index)
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    create(req, res) {
        try {
            const {name} = req.body
            serviceUser.create(name)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    update(req, res) {
        try {
            const {name} = req.body
            const {index} = req.params
            serviceUser.update(index, name)
            const result = serviceUser.findByIndex(index)
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    delete(req, res) {
        try {
            const {index} = req.params
            serviceUser.delete(index)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new apiUser();