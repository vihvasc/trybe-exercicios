//Exercício 1 - faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let recebe = "";
let asterisco = "*";

for (let index = 0; index < n; index += 1) {
    recebe += asterisco;
}

for (let index = 0; index < n; index += 1){
    console.log(recebe);
}




//Exercício 2 - faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

/* for (let index = 0; index < n; index += 1) {
    recebe += asterisco;
    console.log(recebe);
} */

