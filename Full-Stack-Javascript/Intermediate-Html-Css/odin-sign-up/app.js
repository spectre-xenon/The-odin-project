const password = document.getElementById("password");
const repeatedPass = document.getElementById("repeatPassword");
const errMsg = document.querySelector("#inputSet label span");

repeatedPass.addEventListener("input", () => {
  if (password.value == repeatedPass.value) {
    repeatedPass.style.borderColor = "var(--valid)";
    return (errMsg.textContent = "");
  }

  repeatedPass.style.borderColor = "var(--unvalid)";
  errMsg.textContent = "Password doesn't match!";
});
