from groq import Groq
from app.core.config import *
from app.core.prompts import SYSTEM_PROMPT
import json
import re

# Get LLM model
client = Groq(api_key=GROQ_API_KEY)

# Clean and parse LLM client response
def clean_json_response(text: str):
    # remove ```json and ```
    text = re.sub(r"```json\s*", "", text)
    text = re.sub(r"```", "", text)

    return json.loads(text.strip())

# Sent prompt and question to LLM client
def ask(messages, context_text):
    groq_messages = [
        {
            "role": "system",
            "content": SYSTEM_PROMPT
        },
        {
            "role": "system",
            "content": f"""
            Medical Information:

            {context_text}

            Only use this information if it is relevant.
            If it is not relevant, ignore it.
            """
        }
    ]

    groq_messages.extend(
        [
            {
                "role": m.role,
                "content": m.content
            }
            for m in messages
        ]
    )
    
    response = client.chat.completions.create(
        response_format={"type": "json_object"},
        model="llama-3.3-70b-versatile",
        temperature=0, # set deterministic output
        messages = groq_messages
    )
    
    return clean_json_response(response.choices[0].message.content)