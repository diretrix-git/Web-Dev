// const boss = document.getElementById("boss");

// boss.innerHTML = "Directrix";

// window.addEventListener("DOMContentLoaded", () => {});

const boxes = document.getElementsByClassName("box");
console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
  if (i == 0) {
    boxes[i].innerHTML = "This is Box 1";
  }

  if (i == 1) {
    boxes[i].innerHTML = "This is Box 2";
  }
}

// querySelector() - returns the first element that matches a specified CSS selector(s) in the document.
const box = document.querySelectorAll(".box");

box.forEach((element) => {});

const boxes1 = document.querySelectorAll(".box");
boxes1.forEach((box, index) => {
  if (index == boxes1.length - 1) {
    box.innerHTML = "This is the last box";
  }
});

console.log(boxes1.length);
