var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {                       // se for menor de 16 nao vota
    console.log('Não vota')
} else if ( idade < 18 || idade > 65) {               // se tiver 16 ou mais entra automaticamente nesse else if
        console.log('Voto opcional')
  } else {                            // agora se não está abaixo de 18 é pq é maior de idade e entra aqui
        console.log('Voto obrigatório') // aqui nesse extensão node exec, se você selecionar um codigo especifico
                                        // ele vai executar com f8, se nada tiver selecionado ele roda tudo
    }
    