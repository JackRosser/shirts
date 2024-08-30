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

// Parte relativa alla modifica della maglietta

let coloredMiniShirt = document.getElementById("shirt__icon");
let colorPanel = document.getElementById("shirt__color");
let colorBigShirt = document.getElementById("base__shirt");

colorPanel.addEventListener("input", function () {
  coloredMiniShirt.style.color = colorPanel.value;
  colorBigShirt.style.backgroundColor = colorPanel.value;
});

//_____________________________________
// Maglietta pronta per la stampa
let shirt = {
  color: "",
  image: "",
  text: "",
  "font-style": []
};

// FUNZIONE PER IL SUBMIT

let immissioneDati = function (form, valueInteress, obj, propety) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    obj[propety] = valueInteress.value;
    closeModify();
  });
};

// BOTTONE GLOBALE DEL SUBMIT

let button = document.querySelector(".ok__button");

// VARIABILI DEL COLORE DELLA MAGLIETTA

let formShirtColor = document.getElementById("color__modify");
let inputColor = document.getElementById("shirt__color");
let objColor = shirt.color;

// ELEMENTI A CUI VOGLIO APPLICARE LA FUNZIONE
let insertColor = immissioneDati(formShirtColor, inputColor, shirt, "color");
button.addEventListener("click", insertColor);
