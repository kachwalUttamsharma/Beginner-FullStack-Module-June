const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainTicketCont = document.querySelector(".main-ticket-cont");
const textArea = document.querySelector(".textArea-cont");
const allPriorityColor = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");
const toolBoxColors = document.querySelectorAll(".color");

let ticketArr = [];

if (localStorage.getItem("taskTickets")) {
  ticketArr = JSON.parse(localStorage.getItem("taskTickets"));
  ticketArr.forEach((ticket) => {
    createTicket(ticket.taskInfo, ticket.taskPriorityColor, ticket.ticketId);
  });
}

for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", () => {
    const selectedToolBoxColor = toolBoxColors[i].classList[0];

    const filteredTicket = ticketArr.filter((ticket) => {
      return selectedToolBoxColor === ticket.taskPriorityColor;
    });

    const allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }
    // document.querySelector(".main-ticket-cont").innerHTML = "";
    filteredTicket.forEach((ticket) => {
      createTicket(ticket.taskInfo, ticket.taskPriorityColor, ticket.ticketId);
    });
  });

  // show all tickets logic
  toolBoxColors[i].addEventListener("dblclick", () => {
    let allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    ticketArr.forEach((ticket) => {
      createTicket(ticket.taskInfo, ticket.taskPriorityColor, ticket.ticketId);
    });
  });
}

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
    const ticketId = shortid();
    createTicket(textArea.value, modalPriorityColor, ticketId);
    modalCont.style.display = "none";
    textArea.value = "";
  }
});

function createTicket(taskInfo, taskPriorityColor, ticketId) {
  // create a element
  const ticketCont = document.createElement("div");
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
  let toAdd = true;
  for (let i = 0; i < ticketArr.length; i++) {
    if (ticketArr[i].ticketId == ticketId) {
      toAdd = false;
    }
  }
  if (toAdd == true) {
    ticketArr.push({ taskPriorityColor, ticketId, taskInfo });
    localStorage.setItem("taskTickets", JSON.stringify(ticketArr));
  }
  //ticketArr.push({ taskPriorityColor, ticketId, taskInfo });
  mainTicketCont.appendChild(ticketCont);
  handleRemove(ticketCont, ticketId);
  handleLock(ticketCont, ticketId);
  handleColor(ticketCont, ticketId);
}

const lockClass = "fa-lock";
const unLockClass = "fa-lock-open";

function handleRemove(ticket, id) {
  ticket.addEventListener("click", () => {
    if (removeTaskFlag === true) {
      let ticketIndex = getTicketIdx(id);
      // delete a ticket
      // splice(index of item to be removed, how many items to be removed)
      ticketArr.splice(ticketIndex, 1);
      localStorage.setItem("taskTickets", JSON.stringify(ticketArr));
      ticket.remove();
    }
  });
}

function handleLock(ticket, id) {
  const ticketLockElem = ticket.querySelector(".ticket-lock");
  const ticketLockIcon = ticketLockElem.children[0];
  const ticketTaskArea = ticket.querySelector(".task-area");

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

    let ticketIndex = getTicketIdx(id);
    ticketArr[ticketIndex].taskInfo = ticketTaskArea.innerText;
    localStorage.setItem("taskTickets", JSON.stringify(ticketArr));
  });
}

const colors = ["lightpink", "lightgreen", "lightblue", "black"];

function handleColor(ticket, id) {
  const ticketColorBand = ticket.querySelector(".ticket-color");

  ticketColorBand.addEventListener("click", () => {
    // we need to find color of the band and then index of color from colors array
    // we need to update color of band with next index of array
    let currentColor = "";
    for (let i = 0; i < ticketColorBand.classList.length; i++) {
      if (ticketColorBand.classList[i] != "ticket-color") {
        currentColor = ticketColorBand.classList[i];
      }
    }
    const currentColorIndex = colors.findIndex((color) => {
      return color === currentColor;
    });
    const newTicketColor = colors[(currentColorIndex + 1) % colors.length];
    ticketColorBand.classList.remove(currentColor);
    ticketColorBand.classList.add(newTicketColor);

    let ticketIndex = getTicketIdx(id);
    ticketArr[ticketIndex].taskPriorityColor = newTicketColor;
    localStorage.setItem("taskTickets", JSON.stringify(ticketArr));
  });
}

/** Fetching the index of ticketArr using id of ticket which is edited */
function getTicketIdx(id) {
  return ticketArr.findIndex((ticket) => {
    return ticket.ticketId === id;
  });
}
