const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelectorAll(".menu-list");
const navlinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener("click", () => {
    navlinks.classList.toggle("mobile-menu");
  });
}
