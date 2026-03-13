const email = "theoetelsa@yahoo.fr";

// On attend que la page soit bien chargée pour lire le texte
window.addEventListener('load', () => {
    const title = document.querySelector('h1')?.innerText || "Page inconnue";
    const detail = document.querySelector('p')?.innerText || "";
    const pageFile = window.location.pathname.split("/").pop();

    fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            message: `🚨 ALERTE : Elsa a ouvert : ${title}\nDétail : ${detail}\n(Fichier : ${pageFile})`,
            _subject: `Tracker Elsa : ${title} détecté !`,
            _captcha: "false"
        })
    })
    .then(response => console.log("Notification envoyée"))
    .catch(error => console.log("Erreur de notification"));
});
