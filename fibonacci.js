let numi = 0
let numf = 58


for (i = numi; i <= numf; i++) {
    if (i < 1) {
        ultimo = i
        console.log(ultimo)
        penultimo = ultimo
        ultimo = i + 1
        console.log(ultimo)
    } else {
        soma = ultimo + penultimo
        console.log(soma)
        penultimo = ultimo
        ultimo = soma
    }
}

