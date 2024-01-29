function gerartabuada() {
    let nu = document.getElementById('txtn') // num escolhido pelo usuário
    let tabu = document.getElementById('cxatabu') // local onde vai mostrar a tabuada
    if (nu.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(nu.value)
        let cont = 0
        let res = 0
        tabu.innerHTML = '';   //para limpar a tabuada anterior
    for (cont = 1; cont <=10; cont += 1) {
        let res = n * cont  
        tabu.innerHTML += `<option>${n} x ${cont} = ${res}</option>`
       //tabu.innerHTML += `${n} x ${cont} = ${res} <br>`
    }

    }
    document.getElementById('titulo').innerHTML = 'Fiz a tabuada do ' + nu.value;
    //tabu.innerHTML = 'DEU CERTO'
    // o innerHTML é útil para modificar diversas coisas além do texto, desde que você tenha acesso a uma área!
}