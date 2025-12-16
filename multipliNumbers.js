let numi = 1
let numf = 75
let resultado = 0

for (i = numi; i <= numf; i++) {
    if (resultado == 0) {
        resultado = numi
    } else { 
        resultado = resultado * i
    }
 
}

console.log("A multiplicação de " + numi + " até " + numf + " resultou em " + resultado + ".")