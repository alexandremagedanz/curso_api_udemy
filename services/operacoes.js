function somar(num1, num2) {
    return num1 + num2
}   

function subtrair(num1, num2) {
    return num1 - num2
} 

function dividir(num1, num2) {
    return num1 / num2
} 

function multiplicar(num1, num2) {
    return num1 * num2
} 

function media(num1, num2) {
    return ((num1 + num2) / 2)
} 

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar,
    media
}