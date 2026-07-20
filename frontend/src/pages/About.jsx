import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";

function About() {

    const { language } = useLanguage();
    const t = text[language];

    return (

        <div>

            <h1>{t.aboutTitle}</h1>

            <p>{t.aboutText1}</p>

            <p>{t.aboutText2}</p>


            <h2>{t.missionTitle}</h2>

            <p>{t.mission}</p>


            <h2>{t.worksTitle}</h2>


            <div>

                <h3>{t.aiTitle}</h3>

                <p>{t.aiText}</p>

            </div>


            <div>

                <h3>{t.databaseTitle}</h3>

                <p>{t.databaseText}</p>

            </div>


            <div>

                <h3>{t.safetyTitle}</h3>

                <p>{t.safetyText}</p>

            </div>


            <h2>{t.goalTitle}</h2>

            <p>{t.goal}</p>

        </div>

    );

}

export default About;