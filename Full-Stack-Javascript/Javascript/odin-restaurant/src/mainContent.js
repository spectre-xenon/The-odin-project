import createHome from "./welcome/welcome";
import createMenu from "./menu/menu";
import createAbout from "./about/about";

const contentContainer = document.createElement("div");
contentContainer.id = "contentContainer";
const content = document.createElement("main");
contentContainer.appendChild(content);

const create = () => {
  content.textContent = "";
  content.appendChild(createHome());
  return contentContainer;
};

const add = (event) => {
  if (event.target.textContent === "Home") {
    content.textContent = "";
    content.appendChild(createHome());
  } else if (
    event.target.textContent === "Menu" ||
    event.target.textContent === "Order now"
  ) {
    content.textContent = "";
    content.appendChild(createMenu());
  } else if (event.target.textContent === "About") {
    content.textContent = "";
    content.appendChild(createAbout());
  }
};

export default { create, add };
