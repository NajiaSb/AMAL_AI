from qdrant_client import QdrantClient
from .embedding import EMBED_MODEL
from app.core.config import *

# Import RAG database client
client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_DB)

# Retrieve RAG context from database
def search(question):
    # Encode question using hugging face embedding model
    vector = EMBED_MODEL.encode(
        question,
        normalize_embeddings=True
    ).tolist()

    # Search and retreieve RAG context from database
    return client.query_points(
        collection_name="documents",
        query=vector,
        limit=3
    ).points