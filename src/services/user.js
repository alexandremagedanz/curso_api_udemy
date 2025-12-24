const jwt = require("jsonwebtoken")
const user = require("../model/user")
const bcrypt = require("bcrypt")
require('dotenv').config();
const secretkey = process.env.DB_SECRETKEY
const salts = 10

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

        const hashPass = await bcrypt.hash(password, salts)

        return user.create({ 
            email, password: hashPass
        }, { transaction })
    }
    async update(id, email, password, transaction) {
        const oldUser = await this.findById(id, transaction)

        oldUser.email = email || oldUser.email
        oldUser.password = password ? await bcrypt.hash(password, salts) : oldUser.password

        await oldUser.save({transaction})

        return oldUser

    }
    async delete(id, transaction) {
        const user = await this.findById(id, transaction)
        await user.destroy({transaction})
        return true
    }
    async login(email, password) {
        if (!email) {
            throw new Error("Email is required")
        } else if (!password) {
            throw new Error("Password is required")
        } 
        const currentUser = await user.findOne({ where: { email } })

        if (!currentUser) {
            throw new Error("Invalid email or password")
        }

        const verifyUser = await bcrypt.compare(password, currentUser.password)

        if (verifyUser) {
            return jwt.sign(
                { id: currentUser.id }, 
                secretkey, 
                { expiresIn: 60 * 60 }
            )
        }
        throw new Error("Invalid email or password")
    }
}

module.exports = new serviceUser();