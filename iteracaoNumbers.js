let numi = 10
let numf = 100
let resultadop = 0
let resultadoi = 0

for (i = numi; i <= numf; i++) {
    if (i % 2 == 0) {
        resultadop = resultadop - i
    } else { 
        resultadoi = resultadoi + i
    }
 
}

console.log("A soma dos impares de " + numi + " até " + numf + " resultou em " + resultadoi + ". E dos pares a subtração resultou em " + resultadop + ".")