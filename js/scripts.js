// code to show the menu
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
const mobileMenu = document.getElementById("mobile-menu");
const headerNav = document.getElementById("header");
const scrollTopBtn = document.getElementById("scrollTop");

const showMenu = () => {
    if(toggleBtn && navMenu){
        toggleBtn.addEventListener('click',()=>{
            navMenu.classList.toggle('show-menu');
            mobileMenu.classList.toggle("bx-exit");
            mobileMenu.classList.toggle("bx-menu");
        })
    }
}
showMenu();
// end of code to show mobile view navigation menu

// code to remove the show menu class whenever a link is clicked
const clickLink = ()=>{
    navMenu.classList.remove("show-menu");
}
navLinks.forEach(n=>n.addEventListener('click',clickLink));
// code to remove the show menu class whenever a link is clicked ends

//scroll sections active links 


const activeOnScroll = ()=>{
    const scrollY = window.pageYOffset;

    sections.forEach(currentSection=>{
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop-50;
        sectionId  = currentSection.getAttribute("id");

        if(scrollY > sectionTop && scrollY<=sectionHeight +sectionTop){
            document.querySelector('.nav-menu a[href*='+sectionId+']').classList.add('active-link');
        }
        else{
            document.querySelector('.nav-menu a[href=*'+sectionId+']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', activeOnScroll);
//scroll sections active links ends here 

// Method to change the header background
const headerScroll = ()=>{
    if(this.scrollY >=200){
        headerNav.classList.add("scroll-header");
    }
    else{
        headerNav.classList.remove("scroll-header");
    }
}
window.addEventListener('scroll',headerScroll);

// Method to toggle display of the scrolltop icon
const scrollTop = ()=>{
    if(scrollY >= 560){
        scrollTopBtn.classList.add("scrollBtn-visible");
    }
    else{
        scrollTopBtn.classList.remove("scrollBtn-visible");
    }
}
