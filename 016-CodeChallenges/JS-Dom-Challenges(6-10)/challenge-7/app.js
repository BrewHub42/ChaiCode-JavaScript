/**
 * Write your challenge solution here
 */

const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const parent = event.target.parentNode;
        parent.classList.toggle('active');
    })
});

