let addBtn = document.getElementById("add");
let increment_value = document.getElementById("increment_value");
let counterNumber = document.getElementById("number");
let subBtn = document.getElementById("substract");
let reset = document.getElementById("reset");

addBtn.addEventListener("click", () => {
  counterNumber.innerText =
    parseInt(increment_value.value) + parseInt(counterNumber.innerText);
});

subBtn.addEventListener("click", () => {
  let count =
    parseInt(counterNumber.innerText) - parseInt(increment_value.value);
  // condition if() ? true : false
  counterNumber.innerText = count < 0 ? 0 : count;
});

reset.addEventListener("click", () => {
  counterNumber.innerText = 0;
  increment_value.value = 1;
});
