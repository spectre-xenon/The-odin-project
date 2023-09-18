import "./menu.css";
import burger from "./burger.png";
import hotCat from "./cat.png";
import shawrma from "./shawr.png";
import spaget from "./spagg.png";
import egg from "./egg.png";
import steak from "./steak.png";

function RandomPrice() {
  const prices = [1.99, 1.34, 2.55, 22.99, 11.99, 9.99, 69.69];

  return prices[Math.floor(Math.random() * prices.length)];
}

export default function () {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";

  const foodArr = [
    { name: "Burgarina", price: RandomPrice(), src: burger },
    { name: "Hotcat", price: RandomPrice(), src: hotCat },
    { name: "Shawarmaigs", price: RandomPrice(), src: shawrma },
    { name: "Spaghetttti", price: RandomPrice(), src: spaget },
    { name: "eggies", price: RandomPrice(), src: egg },
    { name: "Steak", price: RandomPrice(), src: steak },
  ];

  for (let index = 0; index < foodArr.length; index++) {
    const item = foodArr[index];

    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardTextContainer = document.createElement("div");
    const cardTextName = document.createElement("p");
    const cardTextPrice = document.createElement("p");

    card.classList.add("card");

    card.appendChild(cardImg);
    card.appendChild(cardTextContainer);
    cardTextContainer.appendChild(cardTextName);
    cardTextContainer.appendChild(cardTextPrice);

    cardImg.src = item.src;
    cardTextName.innerText = `Xen's ${item.name}`;
    cardTextPrice.innerText = `only ${item.price}`;

    menuContainer.appendChild(card);
  }
  return menuContainer;
}
