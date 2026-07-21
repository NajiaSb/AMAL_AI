import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";
import "../styles/about.css";

function About(){ // About page component
    const { language } = useLanguage();
    const t = text[language];

    return(
        <div className={`info-page ${language === "ar" ? "arabic" : ""}`}>

            <div className="info-header">
                <h1>{t.aboutTitle}</h1>
                <p>{t.aboutText1}</p>
                <p>{t.aboutText2}</p>
            </div>

            <div className="info-card">
                <h2>{t.missionTitle}</h2>
                <p>{t.mission}</p>
            </div>

            <div className="info-card">
                <h2>{t.worksTitle}</h2>

                <h3>{t.aiTitle}</h3>
                <p>{t.aiText}</p>

                <h3>{t.databaseTitle}</h3>
                <p>{t.databaseText}</p>

                <h3>{t.safetyTitle}</h3>
                <p>{t.safetyText}</p>
            </div>

            <div className="info-card">
                <h2>{t.goalTitle}</h2>
                <p>{t.goal}</p>
            </div>

        </div>
    );
}

export default About;