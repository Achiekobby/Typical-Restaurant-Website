// code to show the menu
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

const showMenu = () => {
    if(toggleBtn && navMenu){
        toggleBtn.addEventListener('click',()=>{
            navMenu.classList.toggle('show-menu');
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

        if(scrollY > sectionTop && scrollY>=sectionHeight +sectionTop){
            document.querySelector('.nav-menu a[href*='+sectionId+']').classList.add('active-link');
        }
        else{
            document.querySelectorAll('.nav-menu a[href=*'+sectionId+']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', activeOnScroll);
//scroll sections active links ends here 
