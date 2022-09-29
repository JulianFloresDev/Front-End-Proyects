/** Variables */
const burgerMenuContent = document.querySelector('.header-nav-burger-menu');
const menuBurgerLine = document.querySelectorAll('.menu-item');
const navElementWithDropdown = document.querySelectorAll('.dropdown-element');


/** Functionalities */
//? Generate burger menu interaction
burgerMenuContent.addEventListener('click', () => {
    //* Change burger to cross
    menuBurgerLine.forEach(line => {
        line.classList.toggle('active');
    });

    //* Active 'header-nav-container' to visible
    burgerMenuContent.nextElementSibling.classList.toggle('active');

    //* Acces to 'header-nav' to apply styles
    burgerMenuContent.parentNode.classList.toggle('active');
})
//! Show scrolleable components
navElementWithDropdown.forEach(element => {
    element.addEventListener('click', () => {
        element.lastElementChild.classList.toggle('active');
        element.nextElementSibling.classList.toggle('active');
    });
});