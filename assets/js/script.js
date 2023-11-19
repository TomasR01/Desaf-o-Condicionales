document.addEventListener("DOMContentLoaded", () => {
  let borde = document.getElementById("trio");

  borde.addEventListener("click", () => {
    borde.classList.toggle("bordered");
  });
});

const botonSticker = document.querySelector(".comprar");

botonSticker.addEventListener("click", () => {
  const sticker1 = document.querySelector("#champ1").value;
  const sticker2 = document.querySelector("#champ2").value;
  const sticker3 = document.querySelector("#champ3").value;

  const total = +sticker1 + +sticker2 + +sticker3;

  if (total <= 10) {
    document.querySelector("#total").innerHTML =
      "Llevas " + total + " stickers";
  } else {
    document.querySelector("#total").innerHTML = "Llevas demasiados stickers";
  }
});

const verificar = document.querySelector("#verificar");

verificar.addEventListener("click", () => {
  const num1 = document.querySelector("#primero").value;
  const num2 = document.querySelector("#segundo").value;
  const num3 = document.querySelector("#tercero").value;

  const resultado = num1 + num2 + num3;

  if (resultado == "911") {
    document.querySelector("#resultado").innerHTML = "Password 1 correcta";
  } else if (resultado == "714") {
    document.querySelector("#resultado").innerHTML = "Password 2 correcta";
  } else {
    document.querySelector("#resultado").innerHTML = "Password incorrecta";
  }
});
