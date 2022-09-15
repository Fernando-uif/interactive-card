export const justNumbers = (e) => {
    let key = window.e ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  };