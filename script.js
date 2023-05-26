const hamburger_menu = document.getElementById("hamburger-menu")
const hamburger_close = document.getElementById("hamburger-close")
const modal_section = document.getElementById("modal")

hamburger_menu.onclick = (e)=>{
    e.preventDefault()
    modal_section.classList.toggle("hidden")

    if(hamburger_menu.classList.contains("on")){
        hamburger_menu.classList.remove("on");
        hamburger_menu.style.display = "none";
        hamburger_close.classList.add("on")
        hamburger_close.style.display = "block"
    }
    
}

hamburger_close.onclick = (e)=>{
    e.preventDefault()
    modal_section.classList.toggle("hidden")

    if(hamburger_close.classList.contains("on")){
        hamburger_close.classList.remove("on");
        hamburger_close.style.display = "none";
        hamburger_menu.classList.add("on")
        hamburger_menu.style.display = "block"
    }
}
