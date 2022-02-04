/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".box").classList.add(randomSuit());
  document.querySelector(".center").innerHTML = randomCard();
};
let randomCard = () => {
  let num = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let random = Math.floor(Math.random() * num.length);
  return num[random];
};

let randomSuit = () => {
  let suit = ["spades", "clubs", "hearts", "diams"];
  let random = Math.floor(Math.random() * suit.length);
  return suit[random];
};
