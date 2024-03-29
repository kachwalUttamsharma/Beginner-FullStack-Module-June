let star = document.querySelectorAll(".star");

let container = document.getElementById("container");
let count = document.getElementById("count");
let filled = 0;
container.addEventListener("click", (e) => {
  let currentClicked = e.target.dataset.index;
  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-colored");
  }
  for (let i = 0; i < currentClicked; i++) {
    star[i].classList.add("star-colored");
  }
  count.innerText = currentClicked;
  filled = currentClicked;
});
