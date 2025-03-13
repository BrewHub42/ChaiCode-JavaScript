/**
 * Write your challenge solution here
 */

let nameInput = document.querySelector("#nameInput");
let jobInput = document.querySelector("#jobInput");
let ageInput = document.querySelector("#ageInput");
let bioInput = document.querySelector("#bioInput");

nameInput.addEventListener('input', function(){
    let nameDisplay = document.querySelector("#nameDisplay");
    nameDisplay.textContent = nameInput.value || "Not provided";
})

jobInput.addEventListener('input', function(){
    let jobDisplay = document.querySelector("#jobDisplay");
    jobDisplay.textContent = jobInput.value || "Not provided";
})

ageInput.addEventListener('input', function(){
    let ageDisplay = document.querySelector("#ageDisplay");
    ageDisplay.textContent = ageInput.value || "Not provided";
})

bioInput.addEventListener('input', function(){
    let bioDisplay = document.querySelector("#bioDisplay");
    bioDisplay.textContent = bioInput.value || "Not provided";
})