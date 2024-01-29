let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
console.log(valores)  é a forma padrão de mostrar todo o vetor, mas que não é bonita pra um produto final.

console.log(valores[0]) aqui vai imprimir cada valor do vetor em uma linha, mas isso fica pesado pro meu programa
console.log(valores[1]) 
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // aqui conseuimos personalizar a saída, mostrando o vetor da maneira escolhida
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
