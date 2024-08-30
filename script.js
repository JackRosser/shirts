//funzione per il toggle del menu

let nav = document.querySelector("nav");
let toggleMenu = document.getElementById("hamburger");

toggleMenu.addEventListener("click", function () {
  toggleMenu.innerHTML.toggle('<i class="fas fa-window-close"></i>');
});
