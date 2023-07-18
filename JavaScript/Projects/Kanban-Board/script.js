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
  </div>
  <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </div>`;

  mainTicketCont.appendChild(ticketCont);
  handleRemove(ticketCont);
  handleLock(ticketCont);
  handleColor(ticketCont);
};

let lockClass = "fa-lock";
let unLockClass = "fa-lock-open";

const handleRemove = (ticket) => {
  ticket.addEventListener("click", () => {
    if (removeTaskFlag === true) {
      ticket.remove();
    }
  });
};

const handleLock = (ticket) => {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");

  ticketLockIcon.addEventListener("click", () => {
    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unLockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove(unLockClass);
      ticketLockIcon.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }
  });
};

const colors = ["lightpink", "lightgreen", "lightblue", "black"];

const handleColor = (ticket) => {
  let ticketColorBand = ticket.querySelector(".ticket-color");

  ticketColorBand.addEventListener("click", () => {
    // we need to find color of the band and then index of color from colors array
    // we need to update color of band with next index of array
    let currentColor = "";
    for (let i = 0; i < ticketColorBand.classList.length; i++) {
      if (ticketColorBand.classList[i] != "ticket-color") {
        currentColor = ticketColorBand.classList[i];
      }
    }
    console.log("current color ", currentColor);
    let currentColorIndex = colors.findIndex((color) => {
      return color === currentColor;
    });
    let newTicketColor = colors[(currentColorIndex + 1) % colors.length];
    ticketColorBand.classList.remove(currentColor);
    ticketColorBand.classList.add(newTicketColor);
  });
};
