import os
from dotenv import load_dotenv

# Load .env keys
load_dotenv()

# Get keys from .env
QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_DB = os.getenv("QDRANT_DB")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
HF_API_KEY = os.getenv("HF_TOKEN")

# Check if exists
if not QDRANT_URL:
    raise RuntimeError("Missing QDRANT_URL")

if not QDRANT_DB:
    raise RuntimeError("Missing QDRANT_DB")

if not GROQ_API_KEY:
    raise RuntimeError("Missing GROQ_API_KEY")

if not HF_API_KEY:
    raise RuntimeError("Missing HF_API_KEY")