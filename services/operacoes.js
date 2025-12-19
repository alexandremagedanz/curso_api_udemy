function somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Os valores devem ser numéricos')
    }
    return num1 + num2
}   

function subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Os valores devem ser numéricos')
    }
    return num1 - num2
} 

function dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Os valores devem ser numéricos')
    }
    if (num2 === 0) {
        throw new Error('Não é possível dividir por zero')
    }
    return num1 / num2
} 

function multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Os valores devem ser numéricos')
    }
    return num1 * num2
} 

function media(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Os valores devem ser numéricos')
    }
    return ((num1 + num2) / 2)
} 

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar,
    media
}