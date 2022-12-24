"use strict";

const radioBtns = [...document.querySelectorAll(".acc__radio")];
const answers = [...document.querySelectorAll(".acc__answer")];

let check = 0;

radioBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (btn.checked && check === 1) {
      btn.checked = false;
      check = 0;
    } else if (btn.checked && check !== 1) {
      check = 1;
    }
  });
});
