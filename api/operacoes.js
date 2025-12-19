const {
    somar,
    subtrair,
    dividir,
    multiplicar,
    media
} = require("../services/operacoes")

function apiSomar(req, res) {
    const {num1, num2} = req.body
    const result = somar(num1,num2)
    res.status(200).send({ result })
}

function apiSubtrair(req, res) {
    const {num1, num2} = req.body
    const result = subtrair(num1,num2)
    res.status(200).send({ result })
}

function apiDividir(req, res) {
    const {num1, num2} = req.body
    const result = dividir(num1,num2)
    res.status(200).send({ result })
}

function apiMultiplicar(req, res) {
    const {num1, num2} = req.body
    const result = multiplicar(num1,num2)
    res.status(200).send({ result })
}

function apiMedia(req, res) {
    const {num1, num2} = req.body
    const result = media(num1,num2)
    res.status(200).send({ result })
}

module.exports = {
    apiSomar,
    apiSubtrair,
    apiDividir,
    apiMultiplicar,
    apiMedia
}