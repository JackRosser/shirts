// funzione per abbassare il panel (che ha class .modify)
const closeModifyButton = document.querySelector(".main__close");

let closeModify = function () {
  let modify = document.querySelector(".modify");
  modify.style.bottom = "-300px";
  closeModifyButton.innerHTML = "";
};

closeModifyButton.addEventListener("click", closeModify);

// funzione per mettere/togliere il menu a lato

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function () {
  let nav = document.querySelector("nav");
  if (hamburger.innerHTML === `<i class="fas fa-bars"></i>`) {
    nav.style.left = "-90%";
    hamburger.innerHTML = `<i class="fas fa-times"></i>`;
    hamburger.style.color = "red";
  } else {
    nav.style.left = "-104%";
    hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
    hamburger.style.color = "rgb(117, 117, 117)";
  }
});
