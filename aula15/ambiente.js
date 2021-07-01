let num = [5,8,2,9,3]
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

num.push(7)
console.log(num)

num.sort()
console.log(num)

console.log('***********************For*******************************')
for (let index = 0; index < num.length; index++) {
    console.log(num[index])    
}

console.log('***********************For in****************************')
for (let pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(7))
console.log(num.indexOf(1)) //Quando não encontra, retorna -1