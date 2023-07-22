// creating input box for replying
function createInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "comment-reply-container");
  div.innerHTML = ` <input type="text" placeholder="write your reply" class="input" />
  <button class="btn submit">Submit</button>`;
  return div;
}

// created a box to render box with new comments
function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comments");
  div.innerHTML = ` <div class="card">
  <span class="text">${text}</span>
  <span id="reply" class="reply">Add Reply</span>
</div>`;
  return div;
}

let commentContainer = document.querySelector(".comment-container");

commentContainer.addEventListener("click", (e) => {
  let closestCard = e.target.closest(".all-comments");
  if (e.target.classList.contains("reply")) {
    const ele = createInputBox();
    closestCard.appendChild(ele);
  }

  if (e.target.classList.contains("submit")) {
    let text = document.querySelector(".input");
    let commentClosest = e.target.closest(".comment-reply-container");
    closestCard.appendChild(addReply(text.value));
    commentClosest.remove();
  }
});
