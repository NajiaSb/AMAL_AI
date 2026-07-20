import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";

function Contact() {

    const { language } = useLanguage();
    const t = text[language];

    return (

        <div>

            <h1>{t.contactTitle}</h1>

            <p>{t.contactDescription}</p>


            <h2>{t.emailTitle}</h2>

            <p>amal.ai@example.com</p>


            <h2>{t.projectInfo}</h2>

            <p><strong>{t.projectName}:</strong> AMAL AI</p>

            <p><strong>{t.purpose}:</strong> AI Medical Assistant</p>

            <p><strong>{t.languages}:</strong> English / العربية</p>


            <h2>{t.feedbackTitle}</h2>

            <p>{t.feedback}</p>

        </div>

    );

}

export default Contact;