import { justNumbers } from "../helpers/justNumbers";
export const writeJustNumbers = () => {
  document.querySelector("#expMM").addEventListener("keypress", function (e) {
    justNumbers(e);
  });
  document.querySelector("#expYY").addEventListener("keypress", function (e) {
    justNumbers(e);
  });

  document.querySelector("#CVC").addEventListener("keypress", function (e) {
    justNumbers(e);
  });
};
