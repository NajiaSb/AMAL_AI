import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";

import image from "../assets/image.jpg";
import image2 from "../assets/image2.jpg";

import "../styles/home.css";


function Home() { 
    const { language } = useLanguage();
    const t = text[language];

    return (
        <div className="home">
            {/* Section 1*/}
            <section
                className="hero"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="hero-overlay">
                    <h2>{t.heroSubtitle}</h2>

                    <Link
                        to="/chat"
                        className="start-button"
                    >
                        {t.startChat}
                    </Link>
                </div>
            </section>

            {/* Section 2*/}
            <section className="about-preview" style={{ direction: "ltr" }}>
                <div className="about-image">
                    <img
                        src={image2}
                        alt="AMAL AI"
                    />
                </div>

                <div 
                    className="about-text" 
                    style={{ 
                        direction: language === "ar" ? "rtl" : "ltr", 
                        textAlign: language === "ar" ? "right" : "left" 
                    }}
                >
                    <p>{t.heroDescription1}</p>
                    <p>{t.heroDescription2}</p>
                </div>
            </section>

            {/* Section 3*/}
            <section className="features">
                <h2>{t.howItWorks}</h2>

                <div className="feature-container">
                    <div className="feature-card">
                        <h3>{t.step1Title}</h3>
                        <p>{t.step1Text}</p>
                    </div>

                    <div className="feature-card">
                        <h3>{t.step2Title}</h3>
                        <p>{t.step2Text}</p>
                    </div>

                    <div className="feature-card">
                        <h3>{t.step3Title}</h3>
                        <p>{t.step3Text}</p>
                    </div>
                </div>
            </section>

            <section className="disclaimer">
                <h2>{t.disclaimerTitle}</h2>
                <p>{t.disclaimer}</p>
            </section>
        </div>
    );
}

export default Home;