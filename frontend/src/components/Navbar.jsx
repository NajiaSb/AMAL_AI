import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { text } from "../translations";
import logo from "../assets/Logo-2-2 1.png"; 
import "../styles/navbar.css";

function Navbar() { 
    const { language, changeLanguage } = useLanguage(); // Access the current language and the function to change it
    const t = text[language];

    return ( 
        <nav>
            {} 
            <div className="logo"> 
                <img src={logo} alt="AMAL AI Logo" className="navbar-logo-img" />
                <span>AMAL AI</span>
            </div>

            <div className="nav-links">
                <Link to="/">{t.home}</Link>
                <Link to="/about">{t.about}</Link>
                <Link to="/chat">{t.chat}</Link>
                <Link to="/contact">{t.contact}</Link>
            </div>

            <button
                className="language-btn"
                onClick={changeLanguage}
            >
                {t.language}
            </button>
        </nav>
    );
}

export default Navbar;