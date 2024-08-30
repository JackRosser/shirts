let coloredMiniShirt = document.getElementById("shirt__icon");
let colorPanel = document.getElementById("shirt__color");
let colorBigShirt = document.getElementById("base__shirt");

colorPanel.addEventListener("input", function () {
  coloredMiniShirt.style.color = colorPanel.value;
  colorBigShirt.style.backgroundColor = colorPanel.value;
});
