
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
    
    function toggleBtnUp (){
        const doc = document.documentElement;
        const top = doc.scrollTop  - (doc.clientTop || 0);

        btnUp.style.display = top < 600 ? 'none' : 'inline-block'
    }

    toggleBtnUp()
    window.addEventListener('scroll', toggleBtnUp)

    btnUp.addEventListener('click', function (){
        window.scrollTo({ 
            behavior: "smooth",
            top: -document.documentElement.scrollHeight
        })
    })


}

// FUEGOS ARTIFICIALES PARA EL CAMPEON

// function pirotecniaDeCampeon (){
//     var duration = 15 * 1000;
//     var animationEnd = Date.now() + duration;
//     var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

//     function randomInRange(min, max) {
//         return Math.random() * (max - min) + min;
//     }

//     var interval = setInterval(function() {
//     var timeLeft = animationEnd - Date.now();

//     if (timeLeft <= 0) {
//         return clearInterval(interval);
//     }

//     var particleCount = 70 * (timeLeft / duration);
//         // since particles fall down, start a bit higher than random
//         confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
//         confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
//     }, 250);
// }

// let target = document.querySelector("#fixture_seccion");

// if(target){
//     function handleIntersect(entries, observer) {
//         entries.forEach(function (entry) {
//             if(entry.isIntersecting){
//                 pirotecniaDeCampeon()
//                 observer.unobserve(target)
//             };
    
//         });
//     }
    
//     let observer = new IntersectionObserver(handleIntersect);
    
//     observer.observe(target);

// }

