/* calculando o fatorial de um número
exemplo: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

function fatorial (n) {
    let fat = 1
    for( let c = n; c > 1; c--) {
        fat *= c
    }
    return fat 
}

console.log(fatorial(5))

/*
Poderia fazer esse exercício do fatorial de outra forma.
De maneira recursiva. Uma recursão acontece quando uma função
chama ela mesma
*/ 
