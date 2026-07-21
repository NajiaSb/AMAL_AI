from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # cross-orgin resource sharing 
from app.services.rag import ask_groq
from app.models.schemas import *
from fastapi import HTTPException

# load fast API and create endpoings
app = FastAPI()

# Add webapp URLS (React frontend, hosting URL, local URL)
origins = [
    "http://localhost:5173", # port react uses
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
    
# Main endpoint:
@app.get("/")
async def root():
    return { # Check if Qdrant or Groq are running
        "status": "running" 
    }

# Chat endpoint to get and send chat
@app.post("/chat", response_model=AmalChatResponse)
async def chat(request: AmalChatRequest):
    # Ask question
    try: 
        answer = ask_groq(request.messages)
        return AmalChatResponse(answer=answer)
    # Except errors
    except Exception as e:
        print("ERROR:", e)
        raise HTTPException(
            status_code=500,
            detail=f"Error generating response: {str(e)}"
        )