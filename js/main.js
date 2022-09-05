const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__menu');
iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle('icon-menu_active');
  menuBody.classList.toggle('header__menu_active');
});
