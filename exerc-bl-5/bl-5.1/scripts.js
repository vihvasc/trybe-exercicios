  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()

 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 function pTagText() {
    document.querySelector("p").innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
 }
 pTagText();

function squareColorA() {
    document.querySelector(".main-content").style.backgroundColor = "rgb(76, 164, 109)";
}
squareColorA();

function squareColorB() {
    document.querySelector(".center-content").style.backgroundColor = "white";
}
squareColorB();

function newTitle () {
    document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";
}
newTitle();

function changeToUpperCase() {
    let tagP = document.querySelectorAll("p");
    for (index = 0; index < tagP.length; index += 1) {
        tagP[index].innerText = tagP[index].innerText.toUpperCase();
    }
}
changeToUpperCase();

function showTagsPOnConsole () {
    let p = document.querySelectorAll("p");
    for (let index = 0; index < p.length; index += 1) {
        console.log(p[index].innerText);
    }
}
showTagsPOnConsole();