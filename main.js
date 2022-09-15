import { justNumbers } from "./src/js/helpers/justNumbers";

$(function ($) {
  $("#cardNumber").mask("9999 9999 9999 9999", { placeholder: " " });
});

document.querySelector("#expMM").addEventListener("keypress", function (e) {
  justNumbers(e);
});
document.querySelector("#expYY").addEventListener("keypress", function (e) {
  justNumbers(e);
});

document.querySelector("#CVC").addEventListener("keypress", function (e) {
  justNumbers(e);
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  console.log(JSON.stringify(data));
  window.alert(`Datos completos: ${JSON.stringify(data)}`);
});

document.querySelector("#cardName").addEventListener("keyup", (e) => {
  document.querySelector("#personName").innerHTML =
    e.target.value.trim() || "Alvin Yakitori";
});

document.querySelector("#cardNumber").addEventListener("keyup", (e) => {
  console.log(e.target.value);
if(!e.target.value.trim()){
  document.querySelector("#numberOfCard").innerHTML = '0000 0000 0000 0000'; 
  return;
}
  document.querySelector("#numberOfCard").innerHTML = e.target.value;
});

document.querySelector("#expMM").addEventListener("keyup", (e) => {
  document.querySelector("#MM").innerHTML = e.target.value || "";
});

document.querySelector("#expYY").addEventListener("keyup", (e) => {
  document.querySelector("#YY").innerHTML = e.target.value || "00";
});

document.querySelector("#CVC").addEventListener("keyup", (e) => {
  document.querySelector("#CVC-text").innerHTML = e.target.value || '000';
});

// document.querySelector("#cardNumber").addEventListener("change", (e) => {
//   // document.querySelector("#numberOfCard").innerHTML =
//   //   e.target.value || "1234 5678 9123 4567";
//     console.log('Cambiando ');
// });
// document
//   .querySelector("#cardNumber")
//   .addEventListener("keypress", function (e) {
//     const numbers = [0,1,2,3]
//     justNumbers(e);
//     console.log((this.value.length /4));
//     if(numbers.includes(this.value.length / 4) && (this.value.length / 4) ){
//         this.value = this.value + '-';
//         console.log('entra');
//     }
//   });