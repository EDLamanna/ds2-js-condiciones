const selector1 = document.querySelector("#Verify");
const info = document.querySelector("#info");

selector1.addEventListener("click", () => {
  const stickerA = +document.querySelector("#conteo1").value;
  const stickerB = +document.querySelector("#conteo2").value;
  const stickerC = +document.querySelector("#conteo3").value;
  const sumStickers = stickerA + stickerB + stickerC;

  if (sumStickers <= 10) {
    info.innerHTML = "llevas " + sumStickers + " stickers";
    info.style.color = "green";
  } else {
    info.innerHTML = "Llevas demasiados Stickers";
    info.style.color = "red";
  }
});
