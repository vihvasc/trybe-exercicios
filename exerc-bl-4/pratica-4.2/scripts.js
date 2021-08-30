/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

//exercício 1 - percorra o array imprimindo todos os valores nele contidos com a função console.log() 

/* for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
} */

//Exercício 2 - some todos os valores contidos no array e imprima o resultado

/* let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}

console.log(soma); */

//Exercício 3 - calcule e imprima a média aritmética dos valores contidos no array

/* let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}

console.log(numbers.length);
console.log(soma);
console.log(soma / numbers.length) */

//Exercício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

/* let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}

console.log(numbers.length);
console.log(soma);
console.log(soma / numbers.length)

if (soma / numbers.length > 20) {
    console.log("valor maior que 20")
} 
else {
    console.log("valor menor que 20")
} */

//Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o

/* let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (maiorNumero < numbers[index]) {
        maiorNumero = numbers[index];
    }
}

console.log(maiorNumero) */

//Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

/* let resto = 0;

for (let index = 0; index < numbers.length; index += 1) {
    //console.log(numbers[index]);

    if (numbers[index] % 2 !== 0) { 
        resto += 1;
        //se numbers na posição index divido por 2 for diferente de 0 o número é ímpar
      }
    }
    
    if (resto === 0) {
        console.log('nenhum valor ímpar encontrado');
        //se resto for igual a zero o número é par
    } 
    else {
        console.log(resto);
    } */

//Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o

/* let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (menorNumero > numbers[index]) {
          menorNumero = numbers[index];
     }
}

console.log(menorNumero); */

//Exercício 8 e 9 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado e imprima o resultado da divisão de cada um dos elementos por 2

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index]);
}

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
}