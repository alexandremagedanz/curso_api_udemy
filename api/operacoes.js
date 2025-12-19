const {
    somar,
    subtrair,
    dividir,
    multiplicar,
    media
} = require("../services/operacoes")

function apiSomar(req, res) {
    try {   
    const {num1, num2} = req.body
        const result = somar(num1,num2)
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

function apiSubtrair(req, res) {
    try {
        const {num1, num2} = req.body
        const result = subtrair(num1,num2)
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

function apiDividir(req, res) {
    try {
        const {num1, num2} = req.body
        const result = dividir(num1,num2)
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

function apiMultiplicar(req, res) {
    try {
        const {num1, num2} = req.body
        const result = multiplicar(num1,num2)
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

function apiMedia(req, res) {
    try {
        const {num1, num2} = req.body
        const result = media(num1,num2)
        res.status(200).send({ result })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

module.exports = {
    apiSomar,
    apiSubtrair,
    apiDividir,
    apiMultiplicar,
    apiMedia
}