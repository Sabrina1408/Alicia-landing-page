/* Mudar tamanho da imagem dependendo do width */
document.addEventListener("DOMContentLoaded", () => {
  let bodyAll = document.querySelector(".header-and-main-content");
  let screenWidth = window.innerWidth;

  if (screenWidth >= 1225) {
    bodyAll.classList.add("container");
  }
});

/* Mudar about de posição dependendo do width da imagem */
let screenWidth = window.innerWidth;
console.log(screenWidth);
if (screenWidth <= 770) {
  let imgWidth
}