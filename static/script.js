let textarea = document.getElementById("writingArea");

let timer;
let fadeTimer;
const timeLimit = 3000;
const fadeDuration = 800; // ms for fade animation

function resetTimer() {
    clearTimeout(timer);
    clearTimeout(fadeTimer);

    // Remove any ongoing fade
    textarea.classList.remove("fading");

    // Start fade animation before clearing
    fadeTimer = setTimeout(() => {
        textarea.classList.add("fading");
    }, timeLimit - fadeDuration);

    // Clear text after fade completes
    timer = setTimeout(() => {
        textarea.value = "";
        textarea.classList.remove("fading");
    }, timeLimit);
}

textarea.addEventListener("input", resetTimer);