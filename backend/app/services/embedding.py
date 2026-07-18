from sentence_transformers import SentenceTransformer

# Load embedding model from hugging face
EMBED_MODEL = SentenceTransformer("BAAI/bge-m3")