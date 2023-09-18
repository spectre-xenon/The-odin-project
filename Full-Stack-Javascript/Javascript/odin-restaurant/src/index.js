import "./globals.css";
import mainContent from "./mainContent";


const createNav = () => {
  const nav = document.createElement("nav");
  const navButtContainer = document.createElement("div");
  const homeButt = document.createElement("button");
  const menuButt = document.createElement("button");
  const aboutButt = document.createElement("button");

  homeButt.classList.add("navButt");
  homeButt.innerText = "Home";

  homeButt.classList.add("navButt");
  menuButt.innerText = "Menu";

  homeButt.classList.add("navButt");
  aboutButt.innerText = "About";

  homeButt.addEventListener("click", mainContent.add);
  menuButt.addEventListener("click", mainContent.add);
  aboutButt.addEventListener("click", mainContent.add);

  navButtContainer.id = "navButtContainer";
  nav.appendChild(navButtContainer);
  navButtContainer.appendChild(homeButt);
  navButtContainer.appendChild(menuButt);
  navButtContainer.appendChild(aboutButt);

  return nav;
};

const main = (() => {
  const body = document.querySelector("body");
  body.appendChild(createNav());
  body.appendChild(mainContent.create());
})();
