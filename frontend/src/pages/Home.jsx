import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";
import "../styles/home.css";


function Home() {

    const { language } = useLanguage();
    const t = text[language];

    return (
        <div className="home">
            <section className="hero">
                <h1>{t.heroTitle}</h1>
                <h2>{t.heroSubtitle}</h2>
                <p>{t.heroDescription1}</p>
                <p>{t.heroDescription2}</p>

                <Link
                    to="/chat"
                    className="start-button"
                >
                    {t.startChat}
                </Link>

            </section>
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