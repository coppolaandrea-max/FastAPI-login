async function controllaCredenziali() {
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password)
         return alert("scrivi username e password");
    const res = await fetch(`/login?username=${username}&password=${password}`); // ${} = va a prendere i valori nel file  , per fare ` si usa : alt + windows + 96
    const dati = await res.json();
    document.getElementById('Risultato').innerText = dati.messaggio;
} 

document.getElementById('btn_registrati').addEventListener('click',controllaCredenziali)
if (dati.messaggio === 0  ) {
    document.getElementById('Risultato').innerText = "accesso negato , username o password errati ";
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}

    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });
     const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }

document.getElementById('bottone').addEventListener('click', controllaCredenziali);