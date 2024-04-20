// Loading page

window.addEventListener("load", () => {
    let loadScreen = document.querySelector(".charge-cont");

    loadScreen.classList.toggle("charge-cont-off");
})

// boton de menu movil

let btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", () => {
    let menu = document.querySelector(".nav-mobile");
    menu.classList.toggle("nav-mobile-open");
    btnMenu.classList.toggle("btn-menu-close");
})

// boton de swipe up

let btnUp = document.querySelector(".btn-up");

window.addEventListener("scroll", () => {
    btnUp.style.opacity = 1;
    btnUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        btnUp.style.opacity = 0;
    })
    
})