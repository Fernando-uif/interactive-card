import { valueStatus } from "../helpers/missAValue";

export const errorForm = () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const [emptyValues, completeValues] = valueStatus(data);
    emptyValues.map((value) => {
      document.querySelector(`#${value}`).classList.add("card__error");
    });
    completeValues.map((value) => {
      document.querySelector(`#${value}`).classList.remove("card__error");
    });
    if (completeValues.length === 5) {
      document.querySelector("#form").setAttribute("hidden", "");
      document.querySelector("#payCard").removeAttribute("hidden");
    } else {
      document.querySelector("#form").removeAttribute("hidden");
      document.querySelector("#payCard").setAttribute("hidden", "");
    }
  });
};
