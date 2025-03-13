/**
 * Write your challenge solution here
 */

const bulb = document.getElementById('bulb');
const btn = document.getElementById('toggleButton');
const switchStatus = document.getElementById('status');
const body = document.getElementById('body');

btn.addEventListener('click', toggleBulbonoff);

function toggleBulbonoff(){
    btn.textContent = (btn.textContent === 'Turn On')? 'Turn Off' : 'Turn On';
    if (bulb.classList.contains('off')){
        bulb.setAttribute('class', 'bulb');
        switchStatus.textContent = "Status: On"
        
    } else {
        bulb.setAttribute('class', 'bulb off');
        switchStatus.textContent = "Status: Off"
    }
    body.classList.toggle('dark-mode');
}
