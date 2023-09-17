import "./globals.css";

const createNav = () => {
  const homeButt = document.createElement("button");
  homeButt.classList.add("navButt");
  homeButt.innerText = "Home";
  const menuButt = document.createElement("button");
  homeButt.classList.add("navButt");
  menuButt.innerText = "Menu";
  const aboutButt = document.createElement("button");
  homeButt.classList.add("navButt");
  aboutButt.innerText = "About";

  homeButt.addEventListener("click", mainContent.add);

  const navButtContainer = document.createElement("div");
  navButtContainer.id = "navButtContainer";
  navButtContainer.appendChild(homeButt);
  navButtContainer.appendChild(menuButt);
  navButtContainer.appendChild(aboutButt);

  const nav = document.createElement("nav");
  nav.appendChild(navButtContainer);

  return nav;
};

const mainContent = (() => {
  const contentContainer = document.createElement("div");
  contentContainer.id = "contentContainer";
  const content = document.createElement("main");
  contentContainer.appendChild(content);

  const create = () => {
    return contentContainer;
  };

  const add = (event) => {
    if (event.target.textContent === "Home") {
      
      content.appendChild(createNav());
    }
  };

  return { create, add };
})();

(function main() {
  const body = document.querySelector("body");
  body.appendChild(createNav());
  body.appendChild(mainContent.create());
})();
