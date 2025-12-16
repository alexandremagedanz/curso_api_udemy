const numero = []
 console.log('array inicial', numero)
numero.push(10)
numero.push(1)
numero.push(2)
numero.push(3)
console.log('array push',numero)
const removidoFim = numero.pop()
console.log(removidoFim)
console.log('array pop',numero)
const removidoFrente = numero.shift()
console.log(removidoFrente)
console.log('array shift', numero)
numero.unshift(99)
numero.unshift(99)
numero.unshift(22)
numero.unshift(33)
console.log('array unshift', numero)
const arrayslice = numero.slice(2, 5)
console.log(arrayslice)
numero.splice(3, 1)
console.log(numero)

let soma = 0
numero.forEach(item => {
    soma += item
})
console.log(soma)