"use strict";

const overlay = document.querySelector("#visitorOverlay");
const underlay = document.querySelector("#sitePageUnderlay");
const requestButton = document.querySelector("#tryRequest");
const closeButton = document.querySelector("#closeVisitorModal");

function setVisitorOverlay(open) {
  overlay.hidden = !open;
  underlay.setAttribute("aria-hidden", String(open));
  requestButton.tabIndex = open ? -1 : 0;
  (open ? closeButton : requestButton).focus();
}

closeButton.addEventListener("click", () => setVisitorOverlay(false));
requestButton.addEventListener("click", () => setVisitorOverlay(true));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.hidden) setVisitorOverlay(false);
});
document.querySelector("#visitorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const feedback = document.querySelector("#visitorFormFeedback");
  feedback.hidden = false;
  feedback.textContent = "Спасибо за обращение. Мы разберёмся в ситуации и свяжемся с вами.";
  event.currentTarget.reset();
});
