require('dotenv').config();
const secretkey = process.env.DB_SECRETKEY
const jwt = require("jsonwebtoken")

function authMiddleware(req, res, next) {
    const token = req.headers['authorization']
    if (!token) {
        res.status(400).send({ msg: 'No token provided or invalid!' })
        return
    }
    jwt.verify(token, secretkey, (err, decoded) => {
        if (err) {
            res.status(400).send({ msg: 'No token provided or invalid!' })
            return
        } 
        req.session = decoded
        next()
    })  
}
module.exports = authMiddleware;