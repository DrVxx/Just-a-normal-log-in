const funnyErrors = [
    "This password was used by a medieval peasant on RuneScape.",
    "Error 404: Brain not found.",
    "This password is weaker than instant noodles.",
    "NASA just called, they want their launch code back.",
    "This password has been spotted on MySpace in 2006.",
    "Your cat could guess this faster.",
    "Congratulations, you found the worst password of 2025!"
];

// Variabel til at huske sidste fejl
let lastError = "";

// Funktion der vælger en tilfældig fejl (men ikke samme som sidst)
function getRandomError() {
    let newError;
    do {
        const randomIndex = Math.floor(Math.random() * funnyErrors.length);
        newError = funnyErrors[randomIndex];
    } while (newError === lastError); // Gentag hvis det er samme fejl

    lastError = newError; // Gem som sidste fejl
    return newError;
}

// Når brugeren prøver at logge ind
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stopper siden fra at reloade

    // Vælg en tilfældig fejl
    const errorMessage = getRandomError();

    // Vis fejl
    document.getElementById("errorBox").innerText = errorMessage;
});


