const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenuImg = document.querySelector("#menu-btn img");
const toggledMenu = document.querySelector("#toggled-menu");

const boutonProjet = document.querySelector("#bouton-projet");
const boutonProfil = document.querySelector("#bouton-profil");
const boutonContact = document.querySelector("#bouton-contact");

toggleMenuBtn.addEventListener("click", toggleNav);

function toggleNav(){
  toggledMenu.classList.toggle("-translate-y-200/100")

  if(toggledMenu.classList.contains("-translate-y-200/100")) {
    toggleMenuImg.setAttribute("src", "/assets/menu.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "false")
  } 
  else {
    toggleMenuImg.setAttribute("src", "/assets/cross.svg")
    toggleMenuBtn.setAttribute("aria-expanded", "true")
  }
}

boutonProjet.addEventListener("click", toggleNav);
boutonProfil.addEventListener("click", toggleNav);
boutonContact.addEventListener("click", toggleNav);


window.addEventListener("keydown", function(e){
  if(e.key === "Escape" && toggledMenu.classList.contains("-translate-y-200/100") === false){
    toggleNav();
  }
})

