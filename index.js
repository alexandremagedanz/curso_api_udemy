const express = require('express')
const routes = require('./src/routes/user')
const database = require('./src/database')  

const app = express()
const porta = 3000
app.use(express.json())

app.use('/api/v1/user', routes)

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
