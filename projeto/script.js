function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno= document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[Erro]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-menino.png')
            } else if (idade < 21) {
            //jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if(idade < 50) {
            //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'bebe-menina.png')
                } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-mulher.png')
                } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
                } else {
                //velho
                img.setAttribute('src', 'idosa.png')
            }
        } res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com a idade de ${idade} anos`
        res.appendChild(img)
    }
}