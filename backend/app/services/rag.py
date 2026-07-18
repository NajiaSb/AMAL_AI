from app.core.config import *
from .qdrant import search
from .groq import ask

# Middleware between database and LLM
def ask_groq(question):
    context = search(question) # Get RAG context from database
    # Join all context, if found
    context_text = "\n\n".join(
        x.payload.get("text", "")
        for x in context
    )

    # Assemble full prompt
    prompt = f"""
        Medical Information:
        {context_text}

        User Question:
        {question}
        """

    return ask(prompt) # Ask LLM