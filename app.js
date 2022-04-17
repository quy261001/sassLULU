function handleToggleMenu() {
  const menuToggle = document.querySelector(".header-menu-toggle");
  const menu = document.querySelector(".header-menu");
  const close = document.querySelector(".header-menu-close");
  if (!menuToggle || !menu) return;
  menuToggle && menuToggle.addEventListener('click', function() {
   menu && menu.classList.add("is-active");
  })
  document.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !e.target.matches(".header-menu-toggle")) {
      menu.classList.remove("is-active");
    }
  });
  close && close.addEventListener("click", function() {
    menu && menu.classList.remove("is-active");
  })
}
handleToggleMenu(); 

function handleLogin() {
  const btnLogin = document.querySelector(".js-button-login")
  const modal = document.querySelector(".modal")
  const btnLeft = document.querySelector(".modal-button-left")
  const btnSign = document.querySelector(".js-button-sign")
  btnLogin.addEventListener("click", function() {
   modal.classList.toggle('open');
  })
  modal.addEventListener("click", function(e) {
    if (e.target == e.currentTarget) {
      modal.classList.toggle('open')
    }
  })
  btnLeft.addEventListener("click", function() {
    modal.classList.toggle("open")
  })
 
}
handleLogin();