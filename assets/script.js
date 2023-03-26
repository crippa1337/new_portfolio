// Query selectors return the HTML elements corresponding to the first
// instance the class set in the parameter
const burger = document.querySelector('.burger');
const mobileLinks = document.querySelector('.mobile__links')


// 'click' event listener, listens for the click event (duh)
// and then executes the code inside the event listener
// if said event is called
//
// here we toggle the mobile navbar by toggling
// a class that has 'display: flex;' on it
burger.addEventListener('click', () => {
    mobileLinks.classList.toggle('open');
});