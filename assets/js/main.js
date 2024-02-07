
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.home__data`, {origin: 'top', delay: 400})
sr.reveal(`.home__img`, {origin: 'bottom', delay: 600})
sr.reveal(`.home__footer`, {origin: 'bottom', delay: 800})

const btnUp = document.querySelector('#btn-up')

if(btnUp){
    
    window.addEventListener('scroll', function (e){
        var doc = document.documentElement;
        var left = doc.scrollLeft - (doc.clientLeft || 0);
        var top = doc.scrollTop  - (doc.clientTop || 0);

        
        if(top < 600){
            btnUp.style.display = 'none'
        } else {
            btnUp.style.display = 'inline-block';
        }
    })

    btnUp.addEventListener('click', function (){
        window.scrollTo({ 
            behavior: "smooth",
            top: -document.documentElement.scrollHeight
        })
    })


}