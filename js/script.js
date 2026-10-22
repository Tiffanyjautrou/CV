const accueil = document.querySelector("#accueil");

const heure = new Date().getHours();
let message;
if (heure < 18) {
  message = "Bonjour !";
} else {
  message = "Bonsoir !";
}

accueil.textContent = message;
