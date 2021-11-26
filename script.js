// const menuLinks = document.querySelectorAll('.nav[data-goto]');
// // const menuLinks = document.querySelectorAll('.nav2[data-goto]');
// // const menuLinks = document.querySelectorAll('.nav3[data-goto]');
// // const menuLinks = document.querySelectorAll('.nav4[data-goto]');
// if (menuLinks.length > 0) { 
//     menuLinks.forEach(menuLinks => {
//         menuLinks.addEventListener("click", onMenuLinkClick);
//     });

//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

//             window.scrollTo ({
//                 top: gotoBlockValue,
//                 behavior: "smooth"
//             });
//         }
//     }
// }


const header = document.querySelector(".header");
const headerInner = document.querySelector("#header__inner");
const nav = document.querySelector('.nav')
const nav1 = document.querySelector('.nav1')
const nav2 = document.querySelector('.nav2')
const nav3 = document.querySelector('.nav3')
const nav4 = document.querySelector('.nav4')
const nav5 = document.querySelector('.nav5')
const nav6 = document.querySelector('.nav6')

window.addEventListener("scroll", scrolling);
window.addEventListener("scroll", function() {
    headerInner.classList.remove('header__inner');
});

function scrolling() {
    let scrollPos = window.scrollY

    if(scrollY > 0) {    
        header.classList.add('white');
        nav1.classList.add('black');
        nav2.classList.add('black');
        nav3.classList.add('black');
        nav4.classList.add('black');
        nav5.classList.add('black');
        nav6.classList.add('black');
    } else {    
        header.classList.remove('white');
        nav1.classList.remove('black');
        nav2.classList.remove('black');
        nav3.classList.remove('black');
        nav4.classList.remove('black');
        nav5.classList.remove('black');
        nav6.classList.remove('black');
        nav.classList.remove('black');
    }
}

// Burger Menu 

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    if(iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
    $("html, body").animate({
        scrollTop: elementOffset -100
    });
});