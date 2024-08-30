let positionRelative = document.getElementById("position_relative");
let textArea = document.querySelector("textarea");

let div = document.createElement("div");
div.id = "position_absolute_text";
positionRelative.appendChild(div);

textArea.addEventListener("input", function () {
  div.innerText = textArea.value;
});
