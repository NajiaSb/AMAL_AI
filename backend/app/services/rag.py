from app.core.config import *
from .qdrant import search
from .groq import ask

# Middleware between database and LLM
def ask_groq(messages):
    
    user_text = "\n".join(
        m.content
        for m in messages
        if m.role == "user"
    )
   
    context = search(user_text) # Get RAG context from database
    
    # Join all context, if found
    context_text = "\n\n".join(
        x.payload.get("text", "")
        for x in context
    )

    return ask(messages, context_text) # Ask LLM