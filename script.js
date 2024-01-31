// Container.
let container = document.createElement("div");
let body = document.querySelector("body");
container.classList.add("container");
body.appendChild(container);

// Flex items.
for (let i = 0; i < 200; i++) {
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
