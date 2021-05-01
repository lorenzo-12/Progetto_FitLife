const navSlide = () => {
    const menu = document.querySelector(".hidden-menu");
    const nav = document.querySelector(".nav_links");
    const navLinks = document.querySelectorAll(".nav_links li");

    menu.addEventListener("click", () => {
        //toggle navbar
        nav.classList.toggle("nav_active");

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s` ;
            }
        
        });
        //menu animation
        menu.classList.toggle('toggle');
    });
    
}

navSlide();