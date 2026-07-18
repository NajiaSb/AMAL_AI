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
def ask(prompt):
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role":"system",
                "content":SYSTEM_PROMPT
            },
            {
                "role":"user",
                "content":prompt
            }
        ]
    )

    return clean_json_response(response.choices[0].message.content)