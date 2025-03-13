/**
 * Write your challenge solution here
 */

const colorBtns = document.querySelectorAll('button');
let mainHeading = document.querySelector('h1');
colorBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        let btnColor = window.getComputedStyle(btn).backgroundColor;
        switch (btn.id) {
            case "redButton":
                mainHeading.style.color = btnColor;
                break;
            case "greenButton":
                mainHeading.style.color = btnColor;
                break;
            case "purpleButton":
                mainHeading.style.color = btnColor;
                break;
            case "blueButton":
                mainHeading.style.color = btnColor;
                break;
            case "resetButton":
                mainHeading.style.color = "black"; 
                break;
        }
    });
})
