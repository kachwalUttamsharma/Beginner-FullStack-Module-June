const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainTicketCont = document.querySelector(".main-ticket-cont");
const textArea = document.querySelector(".textArea-cont");
const allPriorityColor = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");

let addTaskFlag = false;
let removeTaskFlag = false;
let modalPriorityColor = "black";
// adding event listner to priority color

removeBtn.addEventListener("click", () => {
  removeTaskFlag = !removeTaskFlag;

  if (removeTaskFlag === true) {
    window.alert("Delete Button Has Been Activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});
/**
 * Clean Up Active Class
 */
const cleanUpActivity = () => {
  allPriorityColor.forEach((currentElem) => {
    currentElem.classList.remove("active");
  });
};
allPriorityColor.forEach((colorElem) => {
  colorElem.addEventListener("click", () => {
    // i need remove if any element is having
    // active class applied (clean-up)
    cleanUpActivity();
    // adding active class to only selected or clicked color box
    colorElem.classList.add("active");
    // passing selected color to createTicket
    modalPriorityColor = colorElem.classList[0];
  });
});

addBtn.addEventListener("click", () => {
  // Toggle the modal container
  addTaskFlag = !addTaskFlag;

  if (addTaskFlag === true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

modalCont.addEventListener("keydown", (event) => {
  let key = event.key;

  if (key === "Shift") {
    createTicket(textArea.value, modalPriorityColor);
    modalCont.style.display = "none";
    textArea.value = "";
  }
});

const createTicket = (taskInfo, taskPriorityColor) => {
  const ticketId = shortid();
  // create a element
  let ticketCont = document.createElement("div");
  // adding attribute to created element
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="${taskPriorityColor} ticket-color"></div>
  <div class="ticket-id">${ticketId}</div>
  <div class="task-area">
    ${taskInfo}
  </div>`;

  mainTicketCont.appendChild(ticketCont);
  handleRemove(ticketCont);
};

const handleRemove = (ticket) => {
  ticket.addEventListener("click", () => {
    if (removeTaskFlag === true) {
      ticket.remove();
    }
  });
};
