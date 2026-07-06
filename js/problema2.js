const stickerInputs = document.querySelectorAll(".sticker-input");
const verifyStickersButton = document.getElementById("verifyStickersButton");
const stickersResult = document.getElementById("stickersResult");

verifyStickersButton.addEventListener("click", () => {
  let totalStickers = 0;

  stickerInputs.forEach((input) => {
    const inputValue = Number(input.value);
    const isValidQuantity = Number.isFinite(inputValue) && inputValue > 0;

    if (isValidQuantity) {
      totalStickers += inputValue;
    } else {
      totalStickers += 0;
    }
  });

  stickersResult.classList.remove("is-success", "is-warning");

  if (totalStickers <= 10) {
    stickersResult.textContent = `llevas ${totalStickers} stickers`;
    stickersResult.classList.add("is-success");
  } else {
    stickersResult.textContent = "Llevas demasiados stickers";
    stickersResult.classList.add("is-warning");
  }
});