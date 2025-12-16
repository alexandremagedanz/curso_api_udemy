let funcao = "divisão"
let resultado
let num1 = 39
let num2 = 37

if (funcao == "adição"){
    resultado = num1 + num2
} else if (funcao == "subtração"){
    resultado = num1 - num2
} else if (funcao == "multiplicação"){
    resultado = num1 * num2
} else if (funcao == "divisão"){
    resultado = num1 / num2
} else {
    console.log("Operação não selecionada")
}

console.log("O resultada da " + funcao + " é: " + resultado)