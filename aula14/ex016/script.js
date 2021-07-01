

function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')

    var resultado = ''
    if(inicio.value.length == 0){
        resultado = 'Impossível contar!'
    } else if(fim.value.length == 0 || Number(fim.value) == 0){
        resultado = 'Impossível contar!'
    } else {
        if(passo.value.length == 0 || Number(passo.value) == 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            passo.value = 1
        }

        resultado = 'Contando:<p>'

        for (let index = Number(inicio.value); index <= Number(fim.value); index = index + Number(passo.value)) {
            resultado += `${index.toString()} &#128073;` //Se não adicionar o ; dá erro ao exibir os emotion
        }

        resultado += '\uD83C\uDFC1'
    }

    res.innerHTML = resultado
}