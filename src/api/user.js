const serviceUser = require("../services/user")

class apiUser {
    async findAll(_, res) {
        try {   
            const result = await serviceUser.findAll()
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async findById(req, res) {
        try {
            const {id} = req.params
            const result = await serviceUser.findById(id)
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async create(req, res) {
        try {
            const {email, password} = req.body
            await serviceUser.create(email, password)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async update(req, res) {
        try {
            const {email, password} = req.body
            const {id} = req.params
            const result = await serviceUser.update(id, email, password)
            res.status(200).send({ result })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            await serviceUser.delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async login(req, res) {
        try {
            const {email, password} = req.body
            const token = await serviceUser.login(email, password)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new apiUser();