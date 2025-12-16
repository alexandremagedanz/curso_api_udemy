let anoi = 1975
let anof = 2025

for (i = anoi; i<= anof; i++) {
    if (i % 4 ==0 && (i % 100 != 0 || i % 400 == 0)){
        console.log("O ano de " + i + " é o bissexto.")
    } else {
        console.log("O ano de " + i + " não é o bissexto.")
    }
}