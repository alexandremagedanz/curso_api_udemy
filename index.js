const express = require('express')

const app = express()
const porta = 3000

app.get('/api/somar', (req, res) => {
    const {num1, num2} = req.query
    res.send('Oi, a soma é ' + (Number(num1) + Number(num2)))
})

app.get('/api/subtrair', (req, res) => {
    const {num1, num2} = req.query
    res.send('Oi, a soma é ' + (Number(num1) - Number(num2)))
})

app.get('/api/dividir', (req, res) => {
    const {num1, num2} = req.query
    res.send('Oi, a soma é ' + (Number(num1) / Number(num2)))
})

app.get('/api/multiplicar', (req, res) => {
    const {num1, num2} = req.query
    res.send('Oi, a soma é ' + (Number(num1) * Number(num2)))
})

app.get('/api/media', (req, res) => {
    const {num1, num2} = req.query
    res.send('Oi, a soma é ' + ((Number(num1) + Number(num2)) / 2))
})

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta + '!')
})