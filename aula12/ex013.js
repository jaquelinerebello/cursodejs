var agora = new Date()
var diaSem = agora.getDay() // getDay() é o dia da semana

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado

    Os dias da semana funcionam assim o domingo vale zero e vai atá
    sábado que vale 6. Por isso esse comando abaixo quando executado mostra um número:
                                                                console.log(diaSem)

*/

// funcionaria com if, mas você teria que escrever muito mais
//então o switch nesse caso foi uma solução melhor

// sempre use break no final de cada case pra não dar erro
// se você não coloca ele além de executar o case certo vai 
// executar todos que estiverem na sequencia dele
// o break vai garantir que seja executado apenas o case certo
// e depois o programa vai seguir o fluxo

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}

// se você precisar testar intervalos como por exemplo: dias da semana entre 0 e 6 execute tal codigo
// é melhor usar o if
// o switch só funciona com números inteiros. ex: 0, 2, 5
// e o switch também funciona com strings