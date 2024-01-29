function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  //data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if(hora>=0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'   // se manha carrega a foto da manha
        document.body.style.background = '#D5CBC3'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'fototarde.png'   // se tarde carrega a foto tarde
        document.body.style.background = '#F3A37E'
    } else {
        // boa noite     
        img.src = 'fotonoite.png'   // se noite carrega a foto noite
        document.body.style.background = '#2F6EA8'
    }
}