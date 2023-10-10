document.addEventListener("DOMContentLoaded", () => {
  let bodyAll = document.querySelector("#bodyAll");
  let bodyNoImg = document.querySelector("#bodyNoImg");
  let main = document.querySelector("#main");
  let screenWidth = window.innerWidth;

  if (screenWidth >= 1225) {
    bodyAll.classList.add("container");
    bodyNoImg.classList.add("container");
    main.classList.remove("container");
    main.style.marginLeft = "100px";
  }
});