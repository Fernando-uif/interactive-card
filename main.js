import {
  errorForm,
  writeJustNumbers,
  validationForm,
  inputListener,
} from "./src/js/selectors";

$(function ($) {
  $("#cardNumber").mask("9999 9999 9999 9999", { placeholder: " " });
  console.log("pasando por aqui");
});

writeJustNumbers();

validationForm();

errorForm();

inputListener();
