import { createContext, useContext, useState } from "react";
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en"); // Default language is English
    function changeLanguage() { // Function to toggle between English and Arabic
        setLanguage((previous) =>
            previous === "en" ? "ar" : "en"
        );
    }
    return (
        <LanguageContext.Provider value={{language, setLanguage, changeLanguage,}}> 
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() { 
    return useContext(LanguageContext);
}