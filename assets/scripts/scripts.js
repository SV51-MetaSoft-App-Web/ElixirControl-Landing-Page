const check = document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id = check.checked;

    if( id === true){
        location.href = "index.html"
    }else{
        location.href = "index-es.html"
    }
}

//*********** NAV TOGGLE MOBILE************
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});
//*********** NAV TOGGLE MOBILE************