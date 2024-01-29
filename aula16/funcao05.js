/*
O fatorial de um número pode ser calculado baseado
num fatorial de outro número. Ex:
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

ex: se eu tenho de forma genêrica o fatorial de n
esse fatorial de n! é sempre:
n! = n x (n - 1)!

Isso só não acontece se for fatorial de 1, porque 
matematicamente fatorial de 1 é = 1
1! = 1
*/

/*
Baseado nesses conceitos acima eu consigo fazer uma função recursiva
da seguinte maneira:
*/

function fatorial(n) {
        if (n == 1) {
            return 1
        } else {
           return n * fatorial(n-1) 
        }
}

console.log(fatorial(5))

/*
No exemplo acima temos uma função que se chama fatorial que dentro
dela tem uma chamada para ela mesma
*/

/*
Isso que fizemos ali encima com a function chamamos de RECURSIVIDADE
*/

/*
Calculo de fatorial, por exemplo, funciona
da maneira recursiva e funciona da maneira tradicional
*/
