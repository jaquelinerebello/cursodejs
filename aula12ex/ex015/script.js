function verificar() {
    var data = new Date() // comando para incluir a data
    var ano = data.getFullYear() // .getFullYear é pra mostrar os 4 digitos da data atual, puxa do seu sitema
    var fano = document.getElementById('txtano') // fano= resposta que usuário deu no formulário
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > ano){ // fano.value.length vai verificar se a caixa está vazia(não recebeu resposta), e fano.value > ano está verificando se o ano preenchido passa do ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // ano atual menos o ano digitado pelo usuário
        // comando usado pra ver se os aqui acima estavam funcionando: res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img') // vai criar uma tag img pra mim: document.createElement('img')
       /*
        criei uma img com id 'foto', é como se você fosse na mão lá no HTML
        e colocasse dentro da sua div com id "res":
        <div id="res">
            Preencha os dados acima para ver o resultado!
            <img id= 'foto'>
        é a mesma coisa!
       */
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //adulta
                // esse a imagem nao apareceu
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                // nao apareceu
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // mudando css através do JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        // para colocar um conteudo embaixo no caso lá na res, você então vai add um elemento assim: res.appendChild (esse elemento adicionado foi img)
        res.appendChild(img) // para aparecer as imagens que estão lá dentro do if que correspondem a idade
    }
}

// para inserir as fotos eu posso criar um img no html como fizemos no exercício
// anterior de detectar que periodo do dia era (manha, tarde, noite)
// posso também inserir dinamicamente como vamos fazer nesse exercício atual
// existem várias maneiras, hoje você vai conhecer uma delas