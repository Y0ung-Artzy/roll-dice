const winner = document.getElementsByClassName("winner")[0];
const player1 = document.getElementsByClassName("player1")[0];
const player2 = document.getElementsByClassName("player2")[0];
const dice1 = document.getElementsByClassName("dice1")[0];
const dice2 = document.getElementsByClassName("dice2")[0];
const resultTag1 = document.getElementsByClassName("resultTag1")[0];
const resultTag2 = document.getElementsByClassName("resultTag2")[0];

const winnerText = document.createTextNode("Play");
winner.append(winnerText);
winner.style.fontSize = "5rem";

let diceImgSrc;
let diceNumber;
let rollDice = () => {
  diceNumber = Math.floor(Math.random() * 6) + 1;
  let diceSrc = "dice " + diceNumber + ".png";
  diceImgSrc = "images/" + diceSrc;
};

let oneDice = () => {
  rollDice();
  dice1.src = diceImgSrc;
  resultTag1.innerHTML = diceNumber;
};

let twoDice = () => {
  rollDice();
  dice2.src = diceImgSrc;
  resultTag2.innerHTML = diceNumber;
};

player1.addEventListener("click", oneDice);
player2.addEventListener("click", twoDice);
