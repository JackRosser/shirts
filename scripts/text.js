let positionRelative = document.getElementById("position_relative");
let textArea = document.querySelector("textarea");

let div = document.createElement("div");
div.id = "position_absolute_text";
positionRelative.appendChild(div);

textArea.addEventListener("input", function () {
  div.innerText = textArea.value;
});

// bottoncini per modificare lo stile

let font = document.getElementById("font");

let divCreation = function () {
  let existingDiv = document.querySelector(".font-modify");
  if (existingDiv) {
    existingDiv.remove(); // Rimuove il div esistente prima di crearne uno nuovo
  }

  let main = document.querySelector("main");
  let div = document.createElement("div");
  div.className = "font-modify";

  // Creazione del pulsante di chiusura
  let close = document.createElement("div");
  close.innerHTML = `<i class="fas fa-times"></i>`;
  close.className = "petit__close";
  div.appendChild(close);

  // Aggiungi l'evento di chiusura
  close.addEventListener("click", function () {
    div.remove(); // Rimuove il div quando si clicca sulla X
  });

  main.appendChild(div);
  return div;
};

font.addEventListener("click", function () {
  let div = divCreation();
  let select = document.createElement("select");
  select.id = "options";

  let fontDefault = document.createElement("option");
  fontDefault.value = "roboto";
  fontDefault.innerText = "Default (Roboto)";
  fontDefault.className = "menu_tendina";
  fontDefault.style.fontFamily = `"Roboto", sans-serif`;

  let rock = document.createElement("option");
  rock.value = "Rock Salt";
  rock.innerText = "Rock Salt";
  rock.className = "menu_tendina";
  rock.style.fontFamily = `"Rock Salt", cursive`;

  let comic = document.createElement("option");
  comic.value = "Comic Neue";
  comic.innerText = "Comic Neue";
  comic.className = "menu_tendina";
  comic.fontFamily = `"Comic Neue", cursive`;

  let chewy = document.createElement("option");
  chewy.value = "Chewy";
  chewy.innerText = "Chewy";
  chewy.className = "menu_tendina";
  chewy.fontFamily = `"Chewy", system-ui`;

  let bangers = document.createElement("option");
  bangers.value = "Bangers";
  bangers.innerText = "Bangers";
  bangers.className = "menu_tendina";
  bangers.fontFamily = `"Bangers", system-ui`;

  select.append(fontDefault, rock, comic, chewy, bangers);
  div.appendChild(select);
});
