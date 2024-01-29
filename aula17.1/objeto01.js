let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar (p) { // essa é uma função que está dentro do meu objeto
    console.log('Engordou')
    this.peso += p
}
}
// console.log(amigo.nome)
amigo.engordar(2) // a variável aqui tem funcionalidades dentro dela | posso colocar função dentro de variáveis 
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)