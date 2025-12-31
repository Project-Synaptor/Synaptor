#Import FastAPI framework to create backend APIs
from fastapi import FastAPI
#Import database engine to connect FastAPI with PostgreSQL
from database import engine
#Import models so that SQLAlchemy knows which tables to create
import models
# ================= DATABASE SETUP =================
# This line automatically creates all database tables
models.Base.metadata.create_all(bind=engine)
#create FastAPI application instance

app = FastAPI(title="Education AI Backend")
# Used to check whether backend server is running

@app.get("/")
def root():
    return {"status": "Backend is running successfully"}
#============SERVER START=================
# This block ensures the server starts correctly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=False  # Reload disabled to avoid crash
    )