//Exercício 1 - faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let string = "";
let asterisco = "*";
let espaco = " "

/* for (let index = 0; index < n; index += 1) {
    string += asterisco;
}

for (let index = 0; index < n; index += 1){
    console.log(string);
} */

//Exercício 2 - faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

/* for (let index = 0; index < n; index += 1) {
    string += asterisco;
    console.log(string);
} */

//Exercício 3 - Agora inverta o lado do triângulo

//espaco = n - index
//asterisco = index

for (let index = 1; index <= n; index += 1) {
    string = "";

    for (let espacoIndex = 0; espacoIndex < n - index; espacoIndex += 1){
        string += espaco;
    }

    for (let asteriscoIndex = 0; asteriscoIndex < index; asteriscoIndex +=1) {
        string += asterisco;
    }
    
    console.log(string);
}

