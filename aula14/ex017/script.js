function gerarTabuada() {
    let numero = document.querySelector('#numero')
    let resultado = document.querySelector('#resultado')

    resultado.innerHTML = 'Digite um número acima'

    if(numero.value.length == 0){
        window.alert('Por favor digite um número!')
    } else {
        let contador = 1
        let valor = Number(numero.value)
        resultado.innerHTML = ''
        do {
            resultado.innerHTML += `${numero.value} X ${contador} = ${(valor * contador).toString()} \n`
            contador++
        } while(contador <= 10)
    }
}