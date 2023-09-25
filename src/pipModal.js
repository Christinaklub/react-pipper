// Hent variablerne
const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".close");
const textarea = document.querySelector(".pip-text");
const charCount = document.getElementById("charCount");

openBtn.addEventListener("click", () => {
    pipModal.style.display = "block";
});

// tilføj en event listener til luk knappen 
closeBtn.addEventListener("click", () => {
    pipModal.style.display = "none";
});

// start med at sætte character count til det du ville have den skal tælle op til. det er indholdet af charCount. I mit tilfælde er det 255. 
charCount.textContent = "255";

// tilføj en event listener for character count nedtælling.
textarea.addEventListener("input", () => {
    const characterCount = textarea.value.length;
    
    const remainingCharacters = 255 - characterCount;
    
    if (remainingCharacters < 0){
        remainingCharacters = 0;
    }

    charCount.textContent = remainingCharacters;

});