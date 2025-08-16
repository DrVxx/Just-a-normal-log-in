const form = document.getElementById("loginForm");
const btn = document.getElementById("submitBtn");
const errorBox = document.getElementById("errorBox");
const loader = document.getElementById("loader");
const card = document.querySelector(".card");

let attempts = 0;

const funnyErrors = [
  "Access denied. Our servers rated that password a generous 2/10.",
  "Nope. That password was last seen on a sticky note under a keyboard.",
  "Authentication failed: your caps lock confidence is inspiring.",
  "Denied. Security says your password is allergic to success.",
  "Error 418: I’m a teapot. Also, your password isn’t it.",
  "Login blocked. That combo is on our Wall of ‘Nice Try’.",
  "Rejected due to extreme familiarity. Try something less guessable.",
  "Hmm… our AI thinks your password is actually a grocery list."
];

function randomError() {
  attempts++;
  // Every 3rd try, show a “serious” message for variety
  if (attempts % 3 === 0) {
    return "Too many attempts. Please wait… just kidding, keep trying. 😉";
  }
  const i = Math.floor(Math.random() * funnyErrors.length);
  return funnyErrors[i];
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Pretend to verify…
  btn.disabled = true;
  errorBox.textContent = "";
  loader.hidden = false;

  setTimeout(() => {
    loader.hidden = true;
    errorBox.textContent = randomError();
    btn.disabled = false;

    // Add a little shake on failure
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 500);

    // Optional: clear password so it feels “secure”
    document.getElementById("password").value = "";
  }, 900);
});

