const passwordDigitOne = document.getElementById("passwordDigitOne");
const passwordDigitTwo = document.getElementById("passwordDigitTwo");
const passwordDigitThree = document.getElementById("passwordDigitThree");
const passwordButton = document.getElementById("passwordButton");
const passwordResult = document.getElementById("passwordResult");

passwordButton.addEventListener("click", () => {
  const password = passwordDigitOne.value + passwordDigitTwo.value + passwordDigitThree.value;

  passwordResult.classList.remove("is-success", "is-warning");

  if (password === "911") {
    passwordResult.textContent = "password 1 correcto";
    passwordResult.classList.add("is-success");
  } else if (password === "714") {
    passwordResult.textContent = "password 2 correcto";
    passwordResult.classList.add("is-success");
  } else {
    passwordResult.textContent = "password incorrecto";
    passwordResult.classList.add("is-warning");
  }
});