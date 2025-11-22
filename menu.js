document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".main-nav ul");
  
    // controlla che esistano prima di aggiungere l'evento
    if(menuBtn && navMenu){
      menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
    }
  });