from fastapi import FastAPI
from database import engine
import models
from brain.brain_service import run_synaptor
from fastapi.middleware.cors import CORSMiddleware
# Create FastAPI app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ================= DATABASE SETUP =================
models.Base.metadata.create_all(bind=engine)

# ================= ROUTES =================

@app.get("/")
def root():
    return {"status": "Backend is running successfully"}

@app.post("/analyze")
def analyze_learning(payload: dict):
    result = run_synaptor(payload)
    return result

# ================= SERVER START =================
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=False
    )