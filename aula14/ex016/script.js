

function contar() {
    const emojis = [`\u{1F449}`, `\u{1F3C1}`] //Emoji do site https://unicode.org/emoji/charts/full-emoji-list.html 
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')

    let resultado = ''

    if(inicio.value.length == 0 || fim.value.length == 0) {
        resultado = 'Impossível contar!'
    } else {
        let valorInicial = Number(inicio.value)
        let valorFinal = Number(fim.value)
        let valorPasso = Number(passo.value)
        resultado = 'Contando:<br>'

        if(passo.value.length == 0 || valorPasso <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            valorPasso = 1
        }
    
        if(valorInicial < valorFinal) {            
            //Contagem crescente
            for (let index = valorInicial; index <= valorFinal; index += valorPasso) {
                resultado += `${index.toString()} ${emojis[0]}` 
            }            
        } else {
            //Contagem regressiva
            for (let index = valorInicial; index >= valorFinal; index -= valorPasso) {         
                resultado += `${index.toString()} ${emojis[0]}`
            }            
        }

        resultado += emojis[1]
    }

    res.innerHTML = resultado
}