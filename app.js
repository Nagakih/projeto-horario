function load(){
    var mensagem = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hours = data.getHours()
    var minutes = data.getMinutes()
    mensagem.innerHTML = `${hours}:${minutes}`

    if(hours >= 0 && hours < 12){
        img.src = 'img/dia.png'
        document.body.style.backgroundColor = '#4a95ccff'
        mensagem.style.color = '#4a95ccff'
    }else if(hours >= 12 && hours < 18){
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#fbaa6dff'
        mensagem.style.color = '#fbaa6dff'
    }else{
        img.src = 'img/noite.png'
        document.body.style.backgroundColor = '#39474bff'
        mensagem.style.color = '#39474bff'
    }
}
