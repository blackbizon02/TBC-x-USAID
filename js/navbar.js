//active nav link
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const currentNavLink = document.querySelectorAll(
  `#${currentPage.replace(".html", "")}`
);
if (currentNavLink) {
  currentNavLink.forEach((link) => link.classList.add("current-page"));
}

//dropdown menu
const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
dropdownBtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

//navbar opacity change after scroll
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 90) {
      navbar.classList.add("transparent");
    } else {
      navbar.classList.remove("transparent");
    }
  });
});

export default navbar;