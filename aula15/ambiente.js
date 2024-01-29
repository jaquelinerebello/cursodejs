let num = [5, 8, 2, 9, 3]
/* cuida com a ordem dos comandos, ex:
se você colocar o num.push depois do num.sort
ele vai ordenar primeiro os já existentes, e o numero
acrescentado depois do num.sort não
*/

num.push(1) // acrescentando um valor ao meu vetor na última posição
num.sort() // é um método interno de todo elemento que é um vetor, vai ordenar o meu vetor

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4) // procurar um valor dentro do vetor
// console.log(`O valor 4 está na posição ${pos}`) // como o valor 4 não consta na posição ele vai mostrar que 4 está na posição -1

/* se você quiser que apareça algo diferente de -1 pode fazer um if*/

if ( pos == -1 ) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}