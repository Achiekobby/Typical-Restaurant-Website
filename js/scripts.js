// code to show the menu
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
const mobileMenu = document.getElementById("mobile-menu");
const headerNav = document.getElementById("header");
const scrollTopBtn = document.getElementById("scrollTop");
const themeBtn = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const showMenu = () => {
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            mobileMenu.classList.toggle("bx-exit");
            mobileMenu.classList.toggle("bx-menu");
        })
    }
}
showMenu();
// end of code to show mobile view navigation menu

// code to remove the show menu class whenever a link is clicked
const clickLink = () => {
    navMenu.classList.remove("show-menu");
    mobileMenu.classList.add('bx-menu');
    mobileMenu.classList.remove('bx-exit');
}
navLinks.forEach(n => n.addEventListener('click', clickLink));
// code to remove the show menu class whenever a link is clicked ends

//scroll sections active links 
const activeOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(currentSection => {
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 50;
        sectionId = currentSection.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', activeOnScroll);
//scroll sections active links ends here 

// Method to change the header background
const headerScroll = () => {
    if (this.scrollY >= 200) {
        headerNav.classList.add("scroll-header");
    } else {
        headerNav.classList.remove("scroll-header");
    }
}
window.addEventListener('scroll', headerScroll);

// Method to toggle display of the scrolltop icon
const scrollTop = () => {
    if (this.scrollY >= 560) {
        scrollTopBtn.classList.add("scrollBtn-visible");
    } else {
        scrollTopBtn.classList.remove("scrollBtn-visible");
    }
}
window.addEventListener('scroll', scrollTop);

// CHANGING TO DARK AND LIGHT THEME
// Maintaining the selected theme after reload
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// a method to get the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.themeBtn.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activating or deactivating the theme manually using the button
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    // saving the theme and the current icon
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});


// Scroll reveal animation
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '2000',
    reset: true
});

scrollReveal.reveal(`.home-text, .home-img, .about-text, .about-img, 
.services-content, .menu-content, .app-data,
.app-img, .contact-data, .contact-button`, {
    interval: 200
})