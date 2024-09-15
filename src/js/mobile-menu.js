const mobileMenuEl = document.querySelector(".js-mobile-menu");
const mobileMenuToggleEl = document.querySelector(".js-menu-toggle");
const mobileMenuToggleIcon = mobileMenuToggleEl.querySelector("use");

const openIconPath = "./icons/sprite.svg#menu";
const closeIconPath = "./icons/sprite.svg#close";

mobileMenuToggleEl.addEventListener("click", () => {
  mobileMenuEl.classList.toggle("menu-is-hide");

  mobileMenuEl.classList.contains("menu-is-hide")
    ? mobileMenuToggleIcon.setAttribute("href", openIconPath)
    : mobileMenuToggleIcon.setAttribute("href", closeIconPath);

  mobileMenuEl.classList.contains("menu-is-hide")
    ? (document.body.style.overflow = "auto")
    : (document.body.style.overflow = "hidden");
});
