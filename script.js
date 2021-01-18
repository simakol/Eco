const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header-menu");

header.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    e.target.classList.remove("fa-bars");
    e.target.classList.add("fa-times");
    headerMenu.classList.add("active");
  } else if (e.target.classList.contains("fa-times")) {
    e.target.classList.remove("fa-times");
    e.target.classList.add("fa-bars");
    headerMenu.classList.remove("active");
  }
});
