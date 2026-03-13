const email = "theoetelsa@yahoo.fr";
const pageName = document.title || window.location.pathname.split("/").pop();

// Envoi d'une notification discrète à l'ouverture de la page
fetch(`https://formsubmit.co/ajax/${email}`, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        message: `🚨 ALERTE : Elsa vient d'ouvrir la page : ${pageName}`,
        _subject: `Tracker Elsa : scan détecté ! (${pageName})`,
        _captcha: "false" // Désactive le captcha pour que ce soit automatique
    })
})
.then(response => console.log("Notification envoyée"))
.catch(error => console.log("Erreur de notification"));
