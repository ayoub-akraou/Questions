"use strict";
const icon = document.querySelectorAll(".icon");
const question = document.querySelectorAll(".question");
const box = document.querySelectorAll(".box");
let height = [...question].map((e) => `${e.clientHeight / 10 + 2.3}rem`);
box.forEach((e, i) => {
  e.style.height = height[i];
});
icon.forEach((e, i) => {
  e.addEventListener("click", function (a) {
    if (box[i].style.height === height[i]) {
      box[i].style.height = "fit-content";
      box.forEach((x, j) => {
        if (x !== box[i]) {
          x.style.height = height[i];
          icon[j].textContent = "add_box";
        }
      });
    } else {
      box[i].style.height = height[i];
    }
    e.textContent !== "indeterminate_check_box"
      ? (e.textContent = "indeterminate_check_box")
      : (e.textContent = "add_box");
    console.log();
  });
});
