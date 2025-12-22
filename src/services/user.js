const user = require("../model/user")

class serviceUser {
    async findAll() {
        return await user.findAll()
    }
    async findById(id) {
        return await user.findByPk(id)
    }
    async create(name, email, password) {
        if (!name ) {
            throw new Error("Name is required")
        } else if (!email) {
            throw new Error("Email is required")
        } else if (!password) {
            throw new Error("Password is required")
        } 

        await user.create({ 
            name, email, password 
        })
    }
    async update(id, name, email, password) {
        const oldUser = await this.findById(id)

        oldUser.name = name || oldUser.name
        oldUser.email = email || oldUser.email
        oldUser.password = password || oldUser.password

        await oldUser.save()

        return oldUser

    }
    async delete(id) {
        const user = await this.findById(id)
        await user.destroy()
    }
}

module.exports = new serviceUser();