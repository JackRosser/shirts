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
let fontColor = document.getElementById("font-color");
let justify = document.getElementById("justify");

let divCreation = function () {
  let main = document.querySelector("main");
  let div = document.createElement("div");
  div.className = "font-modify";
  main.appendChild(div);
};

font.addEventListener("click", function () {
  divCreation();
  let select = document.createElement("select");
  select.id = "options";
  let fontDefault = document.createElement("option");
  fontDefault.value = "roboto";
  fontDefault.innerText = "Default (Roboto)";
  let rock = document.createElement("option");
  rock.value = "Rock Salt";
  rock.innerText = "Rock Salt";
  let comic = document.createElement("option");
  comic.value = "Comic Neue";
  comic.innerText = "Comic Neue";
  let chewy = document.createElement("option");
  chewy.value = "Chewy";
  chewy.innerText = "Chewy";
  let bangers = document.createElement("option");
  bangers.value = "Bangers";
  bangers.innerText = "Bangers";
  select.append(fontDefault, rock, comic, chewy, bangers);
  div.append(select);
});
