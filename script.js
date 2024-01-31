// Container.
let container = document.createElement("div");
let body = document.querySelector("body");
container.classList.add("container");
body.appendChild(container);

// Button.
let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  container.textContent = null;
  let numOfgrids;
  let number = +prompt("Number of grids!!");
  if (number > 100 || number < 0) {
    alert("You've entered the wrong input!!");
  } else {
    numOfgrids = number;
    // Number of grids.
    for (let i = 1; i <= numOfgrids; i++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("flex-item");
      container.append(gridItem);
    }
    let gridItem = document.querySelectorAll(".flex-item");
    gridItem.forEach((item) => {
      item.addEventListener("mouseover", function () {
        item.classList.add("touchColor");
      });
    });
  }
});
