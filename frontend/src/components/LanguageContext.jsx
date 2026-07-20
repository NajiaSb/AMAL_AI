import { createContext, useContext, useState } from "react";
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");
    function changeLanguage() {
        setLanguage((previous) =>
            previous === "en" ? "ar" : "en"
        );
    }
    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                changeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}
export function useLanguage() {
    return useContext(LanguageContext);
}