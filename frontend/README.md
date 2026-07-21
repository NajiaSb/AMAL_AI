# React + Vite

## How to Run the App

### Install dependencies:
`npm install`
`npm install react-router-dom`

### Start the React dev server:
`npm run dev`

(Opens locally at http://localhost:5173)

Make sure backend is running first

`uvicorn main:app --reload`

## What Each File Does
**App.jsx:** Sets up page routing (Home, Chat, About, Contact) and handles page language switching (English/Arabic).  

**main.jsx:** The main entry point that renders the React app into the HTML.

**translations.js:** Holds all the text in English and Arabic.  

### components/

**LanguageContext.jsx:** Global language state so any page can toggle between English and Arabic.  

**Navbar.jsx:** Top bar with navigation links and the language toggle button.  

### pages/

**Home.jsx:** Main page with the header, quick overview, and safety disclaimer. 

**Chat.jsx:** The main chat screen where users type symptoms, view conversation history, and see AI urgency results. 

**About.jsx:** Page explaining our project mission and how the system works. 

**Contact.jsx:** Page with a form where users can send feedback or messages. 

### services/

**api.js:** Handles the fetch POST request to our FastAPI backend (http://localhost:8000/chat) and formats conversation history.  

### styles/

**about.css, chat.css, contact.css, home.css, main.css, navbar.css:** CSS files for page styling and layout rules.