const express = require('express')
const userRouter = require('./src/routes/user')
const personRouter = require('./src/routes/person')
const apiUser = require('./src/api/user')

const database = require('./src/database')  
const authMiddleware = require('./src/middleware/auth')

const app = express()
const porta = 3000
app.use(express.json())

app.use('/api/v1/user', apiUser.create)
app.use('/api/v1/login', apiUser.login)
app.use(authMiddleware)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/person', personRouter)

database.db
    .sync({ force: false })
    .then(() => {
        app.listen(porta, () => {
        console.log('Servidor rodando na porta ' + porta + '!')
        })
    })
    .catch((e) => {
        console.error(`Não foi possível conectar ao banco: ${e}`)
    })
