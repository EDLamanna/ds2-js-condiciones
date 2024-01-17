const selector1 = document.querySelector("#verify");
const resultado = document.querySelector("#result");
const input1 = document.querySelector("#select1");
const input2 = document.querySelector("#select2");
const input3 = document.querySelector("#select3");

selector1.addEventListener("click", () => {
  const pass = input1.value + input2.value + input3.value;

  if (pass === "911") {
    resultado.innerHTML = "password 1 correcto";
    resultado.style.color = "green";
  } else if (pass === "714") {
    resultado.innerHTML = "password 2 correcto";
    resultado.style.color = "green";
  } else {
    resultado.innerHTML = "password incorrecto";
    resultado.style.color = "red";
  }
});
