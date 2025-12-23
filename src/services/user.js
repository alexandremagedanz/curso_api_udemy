const user = require("../model/user")

class serviceUser {
    async findAll(transaction) {
        return await user.findAll({ transaction })
    }
    async findById(id, transaction) {
        return await user.findByPk(id, { transaction })
    }
    async create(email, password, transaction) {
        if (!email) {
            throw new Error("Email is required")
        } else if (!password) {
            throw new Error("Password is required")
        } 

        return user.create({ 
            email, password 
        }, { transaction })
    }
    async update(id, email, password, transaction) {
        const oldUser = await this.findById(id, transaction)

        oldUser.email = email || oldUser.email
        oldUser.password = password || oldUser.password

        await oldUser.save({transaction})

        return oldUser

    }
    async delete(id, transaction) {
        const user = await this.findById(id, transaction)
        await user.destroy({transaction})
        return true
    }
}

module.exports = new serviceUser();