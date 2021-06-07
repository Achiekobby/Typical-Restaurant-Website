// code to show the menu
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

const showMenu = () => {
    if(toggleBtn && navMenu){
        toggleBtn.addEventListener('click',()=>{
            navMenu.classList.toggle('show-menu');
        })
    }
}
showMenu();
// end of code to show mobile view navigation menu