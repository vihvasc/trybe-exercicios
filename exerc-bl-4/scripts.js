/* const myName = "Virgínia";
const birthCity = "Belo Horizonte";
let birthYear = 1994;
birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear); */

/* let base = 5;
let altura = 8;
let area = base*altura;
let perimetro = (base+altura)*2;

console.log(area);
console.log(perimetro); */

/* let notaCandidato = 75;

if (notaCandidato >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log("Você está na nossa lista de espera")
}
else  {
    console.log("Você foi reprovada(o)")
} */

let candidata = "aprovada";

switch (candidata) {
    case "aprovada":
     console.log("Você foi aprovada!");
     break;

    case "reprovada":
     console.log("Você foi reprovada!");
     break;

    case "lista":
     console.log("Você está na lista de espera!");
     break;

    default:
     console.log("Não se aplica")
}