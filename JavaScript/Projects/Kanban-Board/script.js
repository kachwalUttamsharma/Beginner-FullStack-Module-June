const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");

let addTaskFlag = false;
addBtn.addEventListener("click", () => {
  // Toggle the modal container
  addTaskFlag = !addTaskFlag;

  if (addTaskFlag === true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});
