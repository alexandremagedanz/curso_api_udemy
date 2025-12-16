let numi = 1
let numf = 200
for (let j = numi; j <= numf; j++){
    contador = 0
    for (let i = 1; i <=j; i++) {
        if (j % i == 0) {
            contador = contador + 1
        }
    }
    if (contador <= 2 ) {
        console.log("O número " + j + " é Primo.")
    } else {
        console.log("O número " + j + " não é Primo.")
    }
}
