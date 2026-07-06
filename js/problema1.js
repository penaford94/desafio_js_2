const toggleBorderImage = document.getElementById("toggleBorderImage");
const borderStatus = document.getElementById("borderStatus");

toggleBorderImage.addEventListener("click", () => {
  const imageHasBorder = toggleBorderImage.classList.contains("has-red-border");

  if (imageHasBorder) {
    toggleBorderImage.classList.remove("has-red-border");
    borderStatus.textContent = "La imagen no tiene borde.";
  } else {
    toggleBorderImage.classList.add("has-red-border");
    borderStatus.textContent = "La imagen tiene borde rojo de 2 pixeles.";
  }
});