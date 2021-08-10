function headerColor() {
    document.getElementsByTagName("header")[0].style.backgroundColor = "green";
}
headerColor();


function titleColor() {
let h3 = document.querySelectorAll("h3");
    for (let index = 2; index < h3.length; index += 1) {
        h3[index].style.backgroundColor = "black";
    }

    for (let index = 0; index < h3.length - 2; index += 1) {
        h3[index].style.backgroundColor = "purple";
    }
}
titleColor();

function sectionDivColor1() {
    document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "pink";
}
sectionDivColor1();

function sectionDivColor2() {
    document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";
}
sectionDivColor2();

function footerColor() {
    document.getElementById("footer-container").style.backgroundColor = "blue";
}
footerColor();