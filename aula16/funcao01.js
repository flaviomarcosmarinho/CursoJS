function parImpar(n) {
    if(n%2 == 0) {
        return 'Par !'
    } else {
        return 'Ímpar !'
    }
}

function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(parImpar(11))
console.log(soma(2, 7))

let v = function(x) {
    return x*2
}

console.log(v(5))

//5! = 5 x 4 x 3 x 2 x 1 = 120
function fatorial(n) {
    let fat = 1
    for (let index = n; index > 1; index--) {
        fat *= index
    }
    return fat
}

console.log(fatorial(5))

//Recursivo
function fatorialRecursivo(n){
    if(n == 1) {
        return 1
    }
    return n * fatorialRecursivo(n-1)     
}

console.log(fatorialRecursivo(5))