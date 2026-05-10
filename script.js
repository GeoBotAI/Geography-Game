const focusButtons = document.querySelectorAll(".focus-bubble");
const selectedTitle = document.querySelector("#selected-title");
const selectedCopy = document.querySelector("#selected-copy");

focusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    focusButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    selectedTitle.textContent = button.dataset.title;
    selectedCopy.textContent = button.dataset.copy;
  });
});
