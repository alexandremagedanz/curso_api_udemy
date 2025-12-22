const express = require('express')
const routes = require('./src/routes/user')

const app = express()
const porta = 3000
app.use(express.json())

app.use('/api/v1/user', routes)

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta + '!')
})