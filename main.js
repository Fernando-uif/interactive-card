import {
  errorForm,
  writeJustNumbers,
  validationForm,
  inputListener,
} from "./src/js/selectors";

$(function ($) {
  $("#cardNumber").mask("9999 9999 9999 9999", { placeholder: " " });
});

writeJustNumbers();

validationForm();

errorForm();

inputListener();
