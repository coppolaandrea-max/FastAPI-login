from fastapi import FastAPI , Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Spieghiamo a FastAPI che i file dentro "static" sono accessibili
app.mount("/static", StaticFiles(directory="static"), name="static") # mount = montare , dice che da adesso i StaticFiles sono accessibili e gli dice che cosa può usare


@app.get("/") # endpoint  punto dove richimiamo il nostro server web, lo / significa che volgio la pagna HTML
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')

@app.get("/login")   # un endpoint che controlla il login
def controlla(username : str , password : str ):
    print("username",username,"password",password)
    if username == "admin" and password =="xxx123":
        risposta = {"messaggio" : 1} # se username e password sono corretti il messagio è 1 
    else:
        risposta = {"messaggio" : 0 } # se username e password non sono corretti il messagio è 0
    return(risposta)