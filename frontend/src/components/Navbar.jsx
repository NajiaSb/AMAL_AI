import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { text } from "../translations";

import "../styles/navbar.css";

function Navbar() {
    const { language, changeLanguage } = useLanguage();
    const t = text[language];

    return (
        <nav>

            <div className="logo">
                AMAL AI
            </div>

            <div className="nav-links">

                <Link to="/">
                    {t.home}
                </Link>

                <Link to="/chat">
                    {t.chat}
                </Link>

                <Link to="/about">
                    {t.about}
                </Link>

                <Link to="/contact">
                    {t.contact}
                </Link>

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