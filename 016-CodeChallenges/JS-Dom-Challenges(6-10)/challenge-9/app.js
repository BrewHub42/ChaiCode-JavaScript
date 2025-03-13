/**
 * Write your challenge solution here
 */

const toggleBtn = document.querySelector('.toggle-btn');
const panel = document.querySelector('.panel');
const closeBtn = document.querySelector('.close-btn');
const itemList = document.querySelectorAll('.menu-item');

toggleBtn.addEventListener('click', () => {
    panel.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    panel.classList.remove('active');
});

itemList.forEach(item => {
    item.addEventListener('click', (event) => {
        alert(`${event.target.textContent} is clicked!`);
        panel.classList.remove('active');
    })
});

document.addEventListener('click', (event) => {
    if (!toggleBtn.contains(event.target) && !panel.contains(event.target)) {
        panel.classList.remove('active');
    }
});