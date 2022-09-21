export const inputListener = () => {
  document.querySelector("#cardName").addEventListener("keyup", (e) => {
    document.querySelector("#personName").innerHTML =
      e.target.value.trim() || "Alvin Yakitori";
  });

  document.querySelector("#cardNumber").addEventListener("keyup", (e) => {
    if (!e.target.value.trim()) {
      document.querySelector("#numberOfCard").innerHTML = "0000 0000 0000 0000";
      return;
    }
    document.querySelector("#numberOfCard").innerHTML = e.target.value;
  });

  document.querySelector("#expMM").addEventListener("keyup", (e) => {
    document.querySelector("#MM").innerHTML = e.target.value || "00";
  });

  document.querySelector("#expYY").addEventListener("keyup", (e) => {
    document.querySelector("#YY").innerHTML = e.target.value || "00";
  });

  document.querySelector("#CVC").addEventListener("keyup", (e) => {
    document.querySelector("#CVC-text").innerHTML = e.target.value || "000";
  });
  document.querySelector("#confirmButton").addEventListener("click", (e) => {
    document.querySelector("#payCard").setAttribute("hidden", "");
    document.querySelector("#form").removeAttribute("hidden");
    const data = Object.fromEntries(
      new FormData(document.querySelector("#form"))
    );
    Object.keys(data).map((key) => {
      document.querySelector(`#${key}`).value = "";
    });
    document.querySelector("#numberOfCard").innerHTML = "0000 0000 0000 0000";
    document.querySelector("#personName").innerHTML = "Alvin Yakitori";
    document.querySelector("#MM").innerHTML = "00";
    document.querySelector("#YY").innerHTML = "00";
    document.querySelector("#CVC-text").innerHTML = "000";
  });
};
