/*
Para exercitar o conhecimneto em array e functions:
Número (entre 1 a 100): 
ao digitar o valor ele será adicionado ao array
e visualmente na caixa abaixo de adicionar vai aparecer: valor x adicionado.
Se você digitar um valor repetido ou fora de 1 a 100 ou deixar a caixa vazia e adc vai aparecer um alert dizendo:
Valor inválido ou já encontrado na lista

quando voce clicar em finalizar vai aparecer o seguinte:
Ao todo, temos 5 números cadastrados.
O maior valor informado foi 9.
O menor valor informado foi 1.
Somando todos os valores, temos 25.
A média dos valores digitados é 5.

Se você depois de finalizar adc um novo número esse resultado some e um novo número é adc a tela e ao array

Se você tentar finalizar sem ter digitado nenhum valor vai aparecer um alert assim:
Adicione valores antes de finalizar!
*/


// função para inserir os números digitados pelo usuário


let numeros_escolhidos = [] // armazenamento de numeros escolhidos e filtrados pelas condições
var array_na_tela = document.getElementById('shownum') // onde vai mostrar meu array em formato de lista
var resultado = document.getElementById('resultado')

var maior_valor = 0
var menor_valor = 101

var soma_todos = 0
var media_valores = 0

//testando essas duas linhas de coidgos aqui emcima pra ver oq acontece fora da function
var num = document.getElementById('txtnum') // dando acesso a area de recebimentos dos números

function adicionar() { 
    resultado.innerHTML = ''
    var numero = Number(num.value) // transformando o valor recebido em tipo número

    /*
    Verifico se o número está dentro da faixa de valores estabelecida ou se não teve resposta.
    Se alguma dessas coisas for verdade o valor não é válido e com isso não entra no array.
   */
    if ( numero < 1 || numero > 100 || num.length == 0) { 
        alert('Valor inválido ou já encontrado na lista!')
        return false
    } 
    else {
         /*
        Se o número foi preenchido e está na faixa de valores vou veririficar se
        esse número já existe no meu array, percorro meu array fazendoa  verificação de cada elemento
        ali existente. Se já existir um valor igual, ele não entrará no array.
        */ 

        for (let cont = 0; cont <= numeros_escolhidos.length; cont++ ) { // devo comparar meu n a cada posição do meu array
            if( numero == numeros_escolhidos[cont] ) {
                alert("Valor inválido ou já encontrado na lista!")
                return false
            } 
        }
    }
    numeros_escolhidos.push(numero)
    array_na_tela.innerHTML += `<option>Valor ${numero} foi adicionado</option>`
    num.value = ''  // limpa o campo onde foi preenchido o número
    num.focus()     // o cursor volta pra caixa pronto pra receber um número
    soma_todos += numero
    
    if (maior_valor < numero ) {
            maior_valor = numero
    }

    if ( menor_valor > numero ) {
        menor_valor = numero
    }

}

// função para finalizar e mostrar os dados na tela
function finalizar() {
    if ( numeros_escolhidos.length == 0 ) {
        alert ('Adicione valores antes de finalizar')
    } else {
        media_valores = soma_todos / numeros_escolhidos.length
        resultado.innerHTML += `Ao todo, temos ${numeros_escolhidos.length} números cadastrados.</br>`
        resultado.innerHTML += `O maior valor informado foi ${maior_valor}.</br>`
        resultado.innerHTML += `O menor valor informado foi ${menor_valor}.</br>`
        resultado.innerHTML += `A soma de todos os valores é de ${soma_todos}.</br>`
        resultado.innerHTML += `A média de valores é ${media_valores}.</br>`
    }
}