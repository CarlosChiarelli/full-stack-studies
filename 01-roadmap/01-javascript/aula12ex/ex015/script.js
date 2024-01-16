function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 50){
                img.setAttribute("src", "adulto-m.png");
            } else {
                img.setAttribute("src", "velho-m.png");
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "crianca-f.png");
            } else if (idade < 50) {
                img.setAttribute("src", "adulto-f.png");
            } else {
                img.setAttribute("src", "velho-f.png");
            }            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade e genereo: ${genero} de ${idade} anos</br>`
        res.appendChild(img)
    }
}