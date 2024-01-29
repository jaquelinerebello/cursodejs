
/*
function testar() {
    var res = document.getElementById('res')
    res.innerText = 'testou'
}
*/

function contar() {
    
    var inicio = document.getElementById('vlrinicio')   // resposta inicio contagem
    var passei = document.querySelector('input#vlrpasso') // respota do passo
    var fim = document.querySelector('input#vlrfinal')  //resposta final contagem
    var res = document.getElementById('res')    // onde vai aparecer a resposta
    //replaceAll()
    if(Number(inicio.value) == 0 || Number(fim.value) == 0) {   // se valor de inicio ou fim for 0 ou nulo será impossivel contar
        res.innerText = 'Impossível Contar'
    } 
    else if (Number(passei.value) == 0){                      // se o incremento for 0 passo invalido
       window.alert ('Passo Inválido! Considerando PASSO 1')
    } 
    else if (Number(inicio.value) < Number(fim.value)) {      // se valor de inicio for menor que do fim execute o codigo

        //(contador = Number(inicio.value)); 

       for (contador = Number(inicio.value);contador <= Number(fim.value); contador += Number(passei.value)) {
         res.innerText += String(contador)
         res.innerText += String.fromCodePoint(0x1F449); 

        }
        res.innerText += String.fromCodePoint(0x1F3C1);
        
        /*
        var contador = Number(inicio.value)
        while (contador <= Number(fim.value)) {         // enquanto inicio for menor que final
            res.innerText += String( contador)
            contador += Number (passei.value) 
        }
        */

    }
    else {                                            // se os vlrs preenchidos forem válidos, e não for crescente, vem pra else
        
        for (contador = Number(inicio.value);contador >= Number(fim.value); contador -= Number(passei.value)) {
            res.innerText += String(contador)
            res.innerText += String.fromCodePoint(0x1F449);
        }
       res.innerText += String.fromCodePoint(0x1F3C1)
       
        /*
        var contador = Number(inicio.value)             // contador recebe início
        while (contador >= Number(fim.value)) {     // enquanto contador for >= ao fim execute
            res.innerText += String ( contador )    // escrever contador na div res
            contador -= Number (passei.value)       // contador vai receber ele mesmo - passei
        }
        */       
}

}


/*
você não pode atribuir uma função a uma var, um objeto
assim como não pode atribuir algo a uma função
fique atenta as particularidades e fundamentos dos comandos
para não se perder
lembre-se do visualg como funcionava as coisas por lá e 
transposta aplica esse conhecimento pro JS
console.log por exemplo é um procedimento
a minha var res é meu acesso para a div
então na hora de fazer alguma modificação fica de olho
por exemplo a var inicio desse exercicio, se você muda-la
vai perder o valor de entrada que o usuário digitou
por isso existiu aqui uma variavel contadora!
*/


/*function contar(){
    var inicio = window.document.querySelector('div#vlrinicio')
    var cont = inicio.value
    var fim = window.document.getElementById('vlrfinal')
    var res = document.getElementById('div#res')
        if (inicio.value == 0){
            res.innerText = "Impossível Contar"
        }

        for(var inicio; cont <= fim; cont++) {
            console.log(cont)
        }
}
*/