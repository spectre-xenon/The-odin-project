import "./welcome.css";
import mainContent from "../mainContent";

export default function () {
  const welcomeContainer = document.createElement("div");
  const header = document.createElement("h1");
  const subheader = document.createElement("h2");
  const butt = document.createElement("button");

  welcomeContainer.id = "welcomeContainer";

  header.innerText = "Xen’s Restaurant";
  subheader.innerText = "For delicious sassy meals";
  butt.innerText = "Order now";

  butt.addEventListener("click", mainContent.add);

  welcomeContainer.appendChild(header);
  welcomeContainer.appendChild(subheader);
  welcomeContainer.appendChild(butt);

  return welcomeContainer;
}
