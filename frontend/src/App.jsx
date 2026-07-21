import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";


function Layout() {

    const { language } = useLanguage();

    useEffect(() => { // Update the document's direction and language based on the selected language
        document.documentElement.dir =
            language === "ar" ? "rtl" : "ltr";

        document.documentElement.lang = language; 
    }, [language]);

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;