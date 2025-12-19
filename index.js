const express = require('express')
const {
    apiSomar,
    apiSubtrair,
    apiDividir,
    apiMultiplicar,
    apiMedia
} = require('./api/operacoes')

const app = express()
const porta = 3000
app.use(express.json())

app.post('/api/somar', apiSomar)

app.post('/api/subtrair', apiSubtrair)

app.post('/api/dividir', apiDividir)

app.post('/api/multiplicar', apiMultiplicar)

app.post('/api/media', apiMedia)

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta + '!')
})