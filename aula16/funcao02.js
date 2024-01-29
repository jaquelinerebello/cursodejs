/*
Se você nesse caso, passasse apenas 1 parâmetro, o parâmetro formal ia ficar com um deles 
faltando e vai ficar como undefined
*/

/*
Agora, se você não passar parâmetro nenhum tem a possibilidade de considerar ele 0, basta colocar o parâmetro=0. São os parâmetros opcionais
ex:
function soma(n1=0, n2) {
} 
Obs.: se você colocar o parâmetro = 0, ele só fica = 0 se nenhum parâmetro for passado. Caso contrário recebe
os valor passado por parâmetro
*/

function soma(n1, n2=0) {
    return n1 + n2
}

console.log(soma(2))
