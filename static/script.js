// Funzione asincrona per controllare le credenziali
// async permette di usare await per gestire operazioni asincrone (come fetch)
async function controllaCredenziali() {
    
    // Recupera i valori inseriti nei campi input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Controllo campi vuoti
    if (!username || !password) {
        return alert("Scrivi username e password");
    }

    // =========================
    // RICHIESTA AL SERVER (POST)
    // =========================
    // Invia i dati al backend tramite fetch
    const res = await fetch("/login", {
        method: "POST", // metodo HTTP POST
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            // formato dei dati inviati (tipo form HTML)
        },
        body: `username=${username}&password=${password}`
        // template string: ${} inserisce variabili dentro la stringa
    });

    // Converte la risposta del server in JSON
    const json = await res.json();

    // =========================
    // RISPOSTA DEL SERVER
    // =========================
    // Il backend restituisce un oggetto con una proprietà "messaggio"

    if (json.messaggio == 1) {
        // Accesso riuscito
        document.getElementById("risultato").innerText = "Accesso effettuato";
    } else {
        // Accesso fallito
        document.getElementById("risultato").innerText = "Accesso negato";

        // Svuota i campi per sicurezza
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
}

// =========================
// EVENT LISTENER
// =========================
// Quando l'utente clicca il bottone, esegue la funzione
document.getElementById('bottone').addEventListener('click', controllaCredenziali);