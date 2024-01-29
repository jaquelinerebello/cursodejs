function contar() {                 // quando clicar vai disparar a função/método contar() e
    let inicio =  document.getElementById('txti')   // pra que isso aconteça vou ter que pegar os 
    let fim = document.getElementById('txtf')              //controles aqui pra mim através das var/let
    let passo = document.getElementById('txtp') // o nome entre parenteses () pode ser colocado entre aspas simples('') ou aspas duplas (" ")
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'   // como aqui estamos trabalhando lá dentro do html, podemos usar o <break> para pular linha
        let i = Number (inicio.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        if (p <= 0 ){           // se o passo for 0 dá ruim na página, então forçamos a ir pro 1 caso seja 0
            window.alert("Passo inválido, considerando passo 1")
            p = 1
        }

        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c+= p) {
                res.innerHTML += ` ${c} \u{1F449}` // ESSE código \u{codigodoemojiaqui} só funciona entre crases 
            } 
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}