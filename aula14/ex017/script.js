function gerarTabuada() {
    var numero = document.querySelector('input#numero')
    var resultado = document.querySelector('textarea#resultado')
    var contador = 1

    resultado.innerHTML = 'Digite um número acima'

    if(numero.value.length == 0){
        window.alert('Por favor digite um número!')
    } else {
        resultado.innerHTML = ''
        do {
            resultado.innerHTML += `${numero.value} X ${contador} = ${(Number(numero.value) * contador).toString()} \n`
            contador++
        } while(contador <= 10)
    }
}