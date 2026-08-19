# AMAL AI
### AI Medical Assistant for Accessible Healthcare Support

AMAL AI (**Assistant for Medical Aid in Libya**) is a bilingual AI healthcare companion designed to provide accessible and reliable health guidance in **Arabic and English**.

The system uses a **Retrieval-Augmented Generation (RAG) pipeline** with a Large Language Model (LLM) to help users:
- Understand their symptoms
- Receive general health information
- Assess the urgency of their situation (**Low / Medium / High**)
- Find guidance on when to seek professional medical care

> **Disclaimer:** AMAL AI is an educational AI healthcare prototype. It is **not a medical diagnostic tool** and does not replace doctors, professional medical advice, diagnosis, or treatment.

![Screenshot](./AMAL_AI_Poster.png)

---

# Features

- **Bilingual support**
  - Arabic 
  - English 

- **AI-powered medical chatbot**
  - Natural language symptom conversations
  - Context-aware responses

- **RAG-based knowledge retrieval**
  - Uses trusted medical information sources
  - Retrieves relevant context before generating responses

- **Urgency classification**
  - 🟢 Low — Mild symptoms with no immediate warning signs
  - 🟡 Medium — Symptoms requiring medical attention soon
  - 🔴 High — Potentially urgent situations requiring immediate care

- Designed with responsible AI principles:
  - No diagnosis claims
  - Encourages professional medical consultation
  - Provides educational guidance only

---

# ystem Architecture

```
User
 |
 |  Arabic / English symptom description
 |
 v
React Frontend
 |
 | HTTP Request
 |
 v
FastAPI Backend
 |
 |-- Sentence Transformers
 |       |
 |       v
 |    Vector Embeddings
 |
 |-- Qdrant Vector Database
 |       |
 |       v
 |    Relevant Medical Context
 |
 |-- Groq LLM
 |
 v
AI Response + Urgency Classification
```

---

# Tech Stack

## Backend
- Python
- FastAPI
- Uvicorn
- Pydantic
- Sentence Transformers
- Groq LLM API
- Qdrant Vector Database

## Frontend
- React
- Vite
- React Router
- JavaScript
- CSS

---

# Running the Backend Locally

### Requirements

Make sure you have:

- Python 3.10+
- pip
- A Groq API key
- Qdrant running locally or remotely

---

## 1. Navigate to backend

```bash
cd backend
```

---

## 2. Create a virtual environment

### macOS / Linux

```bash
python3 -m venv venv
```

### Windows

```bash
python3 -m venv venv
```

> This only needs to be done once.

---

## 3. Activate the environment

### macOS / Linux

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

---

## 4. Install dependencies

```bash
pip install -r requirements.txt
```

---

## 5. Configure environment variables

Create a `.env` file inside the backend directory:

```env
GROQ_API_KEY=your_api_key_here
```

---

## 6. Start the FastAPI server

```bash
python run.py
```

or:

```bash
uvicorn main:app --reload
```

The backend will run at:

```
http://localhost:8000
```

---

# 💻 Running the Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

---

## Install dependencies

```bash
npm install
```

Install React Router:

```bash
npm install react-router-dom
```

---

## Start the React development server

```bash
npm run dev
```

The application will open at:

```
http://localhost:5173
```

> Make sure the FastAPI backend is running before using the chatbot.

---

# Project Structure

```
AMAL_AI/
│
├── backend/
│   ├── app/
│   │   ├── core/
│   │   ├── services/
│   │   ├── models/
│   │   └── ...
│   │
│   ├── requirements.txt
│   └── run.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# Frontend Overview

## Main Files

### `App.jsx`
Handles:
- Page routing
- Main application structure
- Language switching

### `main.jsx`
React entry point that mounts the application.

### `translations.js`
Stores English and Arabic translations used throughout the application.

---

# Components

### `LanguageContext.jsx`
Provides global language state management.

### `Navbar.jsx`
Navigation bar containing:
- Page links
- Language toggle

---

# Pages

### `Home.jsx`
Landing page containing:
- Project introduction
- Overview
- Safety disclaimer

### `Chat.jsx`
Main AI assistant interface:
- User symptom input
- Conversation history
- AI responses
- Urgency classification

### `About.jsx`
Explains:
- Project goals
- AI architecture
- How AMAL AI works

### `Contact.jsx`
Feedback/contact form.

---

# Services

### `api.js`

Handles communication with the backend:

```
POST http://localhost:8000/chat
```

Responsible for:
- Sending user messages
- Formatting chat history
- Receiving AI responses

---

# Styles

CSS files:

```
styles/
├── about.css
├── chat.css
├── contact.css
├── home.css
├── main.css
└── navbar.css
```

Each file controls styling for its corresponding component/page.

---

# License

This project is a prototype and intended for educational and research purposes.
