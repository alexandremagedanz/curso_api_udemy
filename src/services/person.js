const person = require("../model/person")
const user = require("../model/user") 


class servicePerson {
    async findAll() {
        return await person.findAll()
    }
    async findById(id) {
        return await person.findByPk(id, { include: { model: user }})
    }
    async create(name, address, userId) {
        if (!name ) {
            throw new Error("Name is required")
        } else if (!address) {
            throw new Error("Address is required")
        } else if (!userId) {
            throw new Error("UserId is required")
        } 

        await person.create({ 
            name, address, userId
        })
    }
    async update(id, name, address) {
        const oldPerson = await this.findById(id)

        oldPerson.name = name || oldPerson.name
        oldPerson.address = address || oldPerson.address

        await oldPerson.save()

        return oldPerson
    }
    async delete(id) {
        const person = await this.findById(id)
        await person.destroy()
    }
}

module.exports = new servicePerson();