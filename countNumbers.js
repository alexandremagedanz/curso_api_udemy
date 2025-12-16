let numi = 0
let numf = 200
let resultado = 0

for (i = numi; i <= numf; i++) {
    if (i % 2 == 0){
        resultado = resultado + 1
        console.log("O número " + i + " é o Par.")
    } else {
        console.log("O número " + i + " é o Impar.")
    }
}

console.log("A Sequencia de " + numi + " até " + numf + " tem " + resultado + " números Pares.")