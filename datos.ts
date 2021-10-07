let btnEnv = document.getElementById("btnEnviar");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");

btnEnv.addEventListener("click", () => {
  let numeroA: number = Number(numero1.value);
  let numeroB: number = Number(numero2.value);
  let resultado: number = numeroA * numeroB;
  console.log("el area del rectangulo es:");
  console.log(resultado);
});
