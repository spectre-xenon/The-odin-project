function play_1() {
  const spear_of_justise = document.getElementById("spear-of-justise");
  const spider_dance = document.getElementById("spider-dance");
  spider_dance.pause();
  spear_of_justise.play();
  spear_of_justise.volume = 0.55;
  spear_of_justise.loop = true;
}

function play_2() {
  const spear_of_justise = document.getElementById("spear-of-justise");
  const spider_dance = document.getElementById("spider-dance");
  spear_of_justise.pause();
  spider_dance.play();
  spider_dance.volume = 0.55;
  spider_dance.loop = true;
}

function hover(img) {
  img.src = "./resources/imgs/soul_broken.png";
}

function hoverOut(img) {
  img.src = "./resources/imgs/soul.png";
}
