const user = require("../model/user")

class serviceUser {
    async findAll() {
        return await user.findAll()
    }
    async findById(id) {
        return await user.findByPk(id)
    }
    async create(email, password) {
        if (!email) {
            throw new Error("Email is required")
        } else if (!password) {
            throw new Error("Password is required")
        } 

        await user.create({ 
            email, password 
        })
    }
    async update(id, email, password) {
        const oldUser = await this.findById(id)

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