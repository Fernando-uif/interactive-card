export const validationForm = () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        const expYY = document.querySelector("#expYY");
        const expMM = document.querySelector("#expMM");
        for (let key in data) {
          switch (key) {
            case "cardName":
              if (!data[key].trim()) {
                const element = document.querySelector(`#${key}`).parentNode;
                element.setAttribute("data-error", "Cant'be blanck");
              } else {
                const contain = document.querySelector(`#${key}`).parentNode;
                contain.removeAttribute("data-error");
              }
              break;
            case "cardNumber":
              const element = document.querySelector(`#${key}`).parentNode;
              if (!data[key].trim()) {
                element.setAttribute("data-error", "Cant'be blanck");
              } else if (/[A-Za-z]/g.test(data[key].trim().split(" ").join(""))) {
                // const contain = document.querySelector(`#${key}`).parentNode;
                element.setAttribute("data-error", "Wrong format, numbers only");
              } else {
                element.removeAttribute("data-error");
              }
              break;
            case "expMM":
              if (!data[key].trim() || !expYY.value) {
                const element = document.querySelector(`#${key}`).parentNode;
                element.setAttribute("data-error", "Cant'be blanck");
              } else if (
                /[A-Za-z]/g.test(data[key].trim().split(" ").join("")) &&
                /[A-Za-z]/g.test(expYY.trim().split(" ").join(""))
              ) {
                const contain = document.querySelector(`#${key}`).parentNode;
                contain.setAttribute("data-error", "Wrong format, numbers only");
              } else {
                const contain = document.querySelector(`#${key}`).parentNode;
                contain.removeAttribute("data-error");
              }
              break;
            case "expYY":
              if (!data[key].trim() || !expMM.value) {
                const element = document.querySelector(`#${key}`).parentNode;
                element.setAttribute("data-error", "Cant'be blanck");
              } else if (
                /[A-Za-z]/g.test(data[key].trim().split(" ").join("")) &&
                /[A-Za-z]/g.test(expMM.trim().split(" ").join(""))
              ) {
                const contain = document.querySelector(`#${key}`).parentNode;
                contain.setAttribute("data-error", "Wrong format, numbers only");
              } else {
                const contain = document.querySelector(`#${key}`).parentNode;
                contain.removeAttribute("data-error");
              }
              break;
            case "CVC":
              if (!data[key].trim()) {
                const element = document.querySelector(`#${key}`).parentNode;
                element.setAttribute("data-error", "Cant'be blanck");
              } else if (
                /[A-Za-z]/g.test(data[key].trim().split(" ").join("")) &&
                /[A-Za-z]/g.test(expYY.trim().split(" ").join(""))
              ) {
                const contain = document.querySelector(`#${key}`).parentNode;
                contain.setAttribute("data-error", "Wrong format, numbers only");
              } else {
                const contain = document.querySelector(`#${key}`).parentNode;
                contain.removeAttribute("data-error");
              }
              break;
          }
        }
      });
}