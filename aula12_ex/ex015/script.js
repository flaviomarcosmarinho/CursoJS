function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento = document.getElementById('txtano') 
    var res = document.querySelector('div#res')

    if(anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')        
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoNascimento.value) 
        var genero = ''
        var img = document.createElement('img') //Criando o elemento imagem
        img.setAttribute('id', 'foto') //Setando o atributo id para o elemento imagem

        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){                
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade < 18){                
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){                
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {                
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){                
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if(idade < 18){                
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){                
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {                
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adicionando a imagem como filho da div resultado
    }
}