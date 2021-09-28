/* eslint-disable */
// import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumbers();
};

let generateRandomNumbers = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["spades", "club", "heart", "diamond"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
