let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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

let soma = 0;

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
}