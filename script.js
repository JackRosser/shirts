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

{
  /* <form id="color__modify" class="modify">
<div>
  <!-- questo è la X di chiusura dentro il button -->
  <div class="main__close"><i class="fas fa-times"></i></div>
  <!-- _______________________________________ -->
  <label for="shirt__color"></label>
  <input type="color" id="shirt__color" />
  <span id="shirt__icon"><i class="fas fa-tshirt"></i></span>
</div>
<button type="submit" id="ok__button">OK</button>
</form> */
}

let coloredMiniShirt = document.getElementById("shirt__icon");
let colorPanel = document.getElementById("shirt__color");
let colorBigShirt = document.getElementById("base__shirt");

colorPanel.addEventListener("input", function () {
  coloredMiniShirt.style.color = colorPanel.value;
  colorBigShirt.style.backgroundColor = colorPanel.value;
});

// Ritorna al colore originale se l'utente clicca fuori o non conferma
// colorPanel.addEventListener("change", function () {
//   colorBigShirt.style.backgroundColor = `rgb(210, 210, 210)`;
// });
