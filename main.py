# Importa le classi necessarie da FastAPI
from fastapi import FastAPI, Form

# Serve per restituire file (es: HTML)
from fastapi.responses import FileResponse

# Serve per gestire file statici (CSS, JS, immagini)
from fastapi.staticfiles import StaticFiles


# Crea un'istanza dell'applicazione FastAPI
app = FastAPI()


# =========================
# FILE STATICI
# =========================
# "mount" collega una cartella locale a un percorso URL
# In questo caso:
# - tutto ciò che è dentro la cartella "static"
# - sarà accessibile dal browser tramite /static
# Esempio: static/style.css → http://localhost:8000/static/style.css

app.mount("/static", StaticFiles(directory="static"), name="static")


# =========================
# HOMEPAGE
# =========================
# @app.get("/") definisce un endpoint GET
# "/" indica la root del sito (homepage)

@app.get("/")
def home():
    # Restituisce il file HTML principale
    # Quando l'utente entra nel sito, vede questa pagina
    return FileResponse('static/index.html')


# =========================
# LOGIN (GET)
# =========================
# Endpoint per controllare username e password
# Riceve i dati tramite URL (query parameters)

@app.get("/login")
def controlla(username: str, password: str):
    
    # Stampa i dati ricevuti nel terminale (debug)
    print("username", username, "password", password)

    # Controllo credenziali (hardcoded, cioè scritte direttamente nel codice)
    if username == "admin" and password == "xxx123":
        
        # Se corrette → messaggio = 1
        risposta = {"messaggio": 1}
    
    else:
        # Se errate → messaggio = 0
        risposta = {"messaggio": 0}

    # Restituisce un JSON al client (browser / JavaScript)
    return risposta