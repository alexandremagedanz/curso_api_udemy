const { transaction } = require("../../test/integration/user.test")
const person = require("../model/person")
const user = require("../model/user") 


class servicePerson {
    async findAll(transaction) {
        return await person.findAll({ transaction })
    }
    async findById(id, transaction) {
        return await person.findByPk(id, { include: { model: user }, transaction})
    }
    async create(name, address, userId, transaction) {
        if (!name ) {
            throw new Error("Name is required")
        } else if (!address) {
            throw new Error("Address is required")
        } else if (!userId) {
            throw new Error("UserId is required")
        } 

        return person.create({ 
            name, address, userId
        }, { transaction })
    }
    async update(id, name, address, userId, transaction) {
        const oldPerson = await this.findById(id, transaction)

        oldPerson.name = name || oldPerson.name
        oldPerson.address = address || oldPerson.address
        oldPerson.userId = userId || oldPerson.userId
        await oldPerson.save({ transaction })

        return oldPerson
    }
    async delete(id, transaction) {
        const person = await this.findById(id, transaction)
        await person.destroy({ transaction })
        return true
    }
}

module.exports = new servicePerson();