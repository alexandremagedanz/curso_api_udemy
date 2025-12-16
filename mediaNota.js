let media
let soma
let nota1 = -11
let nota2 = -11
let nota3 = -11
soma = (nota1 + nota2 + nota3)
media = soma /3

if (media >=0 && media < 3) {
    console.log("Nota foi Horrível!")
} else if (media >= 3 && media < 7) {
    console.log("Nota dá pra Melhorar!")   
} else if (media >= 7 && media <= 10) {
    console.log("Nota Excelente!")
} else{
    console.log("Nota Inválida!")
}

