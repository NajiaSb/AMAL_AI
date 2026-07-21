import { useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";
import "../styles/contact.css";

function Contact(){

    const { language } = useLanguage();
    const t = text[language];

    const [form,setForm] = useState({ // Form state to hold email, title, and message
        email:"",
        title:"",
        message:""
    });

    const [submitted,setSubmitted] = useState(false); // State to track if the form has been submitted

    function handleChange(e){ // Update the form state when input fields change
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    function handleSubmit(e){ // Handle form submission
        e.preventDefault();
        console.log(form);
        setSubmitted(true);
        setForm({
            email:"",
            title:"",
            message:""
        });
    }

    return(
        <div className="contact-page">
            <div className="contact-card">
                <h1>
                    {t.contactTitle}
                </h1>
                <p className="contact-description">
                    {t.contactDescription}
                </p>
                <form onSubmit={handleSubmit}>
                    <label>
                        {t.emailTitle}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.emailPlaceholder}
                        required
                    />
                    <label>
                        {t.title}
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder={t.titlePlaceholder}
                        required
                    />
                    <label>
                        {t.message}
                    </label>

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t.messagePlaceholder}
                        required
                    />
                    <button type="submit">
                        {t.submit}
                    </button>
                </form>
                {
                    submitted &&
                    <p className="success-message">
                        {t.successMessage}
                    </p>
                }
            </div>
        </div>
    );
}

export default Contact;