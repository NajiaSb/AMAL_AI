import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";

function AnimatedPage({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

function Layout() {
    const location = useLocation();
    const { language } = useLanguage();

    useEffect(() => {
        document.documentElement.dir =
            language === "ar" ? "rtl" : "ltr";

        document.documentElement.lang = language;
    }, [language]);

    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                    <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                    <Route path="/chat" element={<AnimatedPage><Chat /></AnimatedPage>}/>
                    <Route path="/contact" element={<AnimatedPage> <Contact /> </AnimatedPage>} />
                </Routes>
            </AnimatePresence>
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