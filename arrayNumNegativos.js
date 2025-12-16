let numeros = [14, -4, 54, -3, 4, 12, 34, -8, 43, -61 ]

let conta = 0

for( let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        conta += 1
    }
}

console.log('O Array tem ', conta, ' números negativos.')