
function randomNumber() {
    return Math.floor(Math.random() * arrayCard.length);

}


let arrayCard = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K"]
let cardNumber = arrayCard[randomNumber()]


let divCarta = document.getElementById("numeroCentro");
let vaH1 = document.createElement("h1");
let vaNumber = cardNumber

vaH1.style.fontSize = "150px"
vaH1.style.margin = "auto"
vaH1.style.textAlign = "center";


vaH1.innerText = vaNumber;
divCarta.appendChild(vaH1);



function randomSimbolo() { return Math.floor(Math.random() * arraySimbolo.length);}

function randomColor() { return Math.floor(Math.random() * arrayColor.length);}
let arrayColor = [ "red", "black"]
let simboloColor = arrayColor [randomColor()]


let arraySimbolo = ["♦", "♥", "♠", "♣"];
let simboloNumber = arraySimbolo [randomSimbolo()];

let divSimbolo = document.getElementById("divSimbolo");
let VaH1s = document.createElement("h1");
let vaSimbolo = simboloNumber;

VaH1s.style.fontSize = "100px";
VaH1s.style.position = "relative";
VaH1s.style.color = simboloColor;
VaH1s.style.margin = "0";
VaH1s.style.textAlign = "center";

VaH1s.innerText= vaSimbolo;
divSimbolo.appendChild (VaH1s);





let divSimbolo2 = document.getElementById("divSimbolo2");
let VaH1s2 = document.createElement("h1");


VaH1s2.style.fontSize = "100px";
VaH1s2.style.position = "relative";
VaH1s2.style.textAlign = "center";
VaH1s2.style.margin = "0";
VaH1s2.style.color = simboloColor;

VaH1s2.innerText = vaSimbolo;
divSimbolo2.appendChild (VaH1s2);







