var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var cont = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

    if (nivel === 'facil') {
        cont = 1500
    } else if (nivel === 'normal') {
        cont = 1000
    } else if (nivel === 'dificil') {
        cont = 750
    }

function ajustaTamanho () {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanho()

var cronometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posicaoMosquito () {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        document.getElementById('vida' + vidas).src="imagens/coracao_vazio.png"
        vidas++
        if (vidas > 3) {
            window.location.href="fim_de_jogo.html"
        }
    }

var posicaoX = Math.floor(Math.random() * largura) - 100
var posicaoY = Math.floor(Math.random() * altura) - 100
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY
// console.log(posicaoX, posicaoY);

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()
mosquito.id = 'mosquito'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
document.body.appendChild(mosquito)
mosquito.onclick = function () {
    this.remove()
}
}

function tamanhoMosquito () {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }   
}

function ladoMosquito () {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}