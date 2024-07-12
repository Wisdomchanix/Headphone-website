let navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


// TO REMOVE MENU WHEN EACH NAV LINK IS CLICKED
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
                                                                                                    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// TO CHANGE HEADER COLOR
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
                                                                                                // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// ACTIVE LINKS

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_header, .section_title`,{delay: 600})
sr.reveal(`.home_footer`,{delay: 700})
sr.reveal(`.home_img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor_img, .products_card, .footer_logo, .footer_content, .footer_copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs_data, .discount_animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs_img, .discount_img`,{origin: 'right'})
sr.reveal(`.case_img`,{origin: 'top'})
sr.reveal(`.case_data`)