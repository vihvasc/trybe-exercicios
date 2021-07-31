//Exercício 1 - faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let negocio = 5;
let recebe = "";
let asterisco = "*";


//Exercício 2 - faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

for (let index = 0; index < negocio; index += 1) {
    recebe += asterisco;
    console.log(recebe);
}

