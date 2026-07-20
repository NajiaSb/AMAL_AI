import { useState } from "react";
import { sendMessage } from "../services/api";
import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";
import "../styles/chat.css";

function Chat() {
    const { language } = useLanguage();
    const t = text[language];
    const [message, setMessage] = useState("");
    const [answer, setAnswer] = useState(null);
    const [previousMessage, setPreviousMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!message.trim()) {
            return;
        }

        setPreviousMessage(message);
        setLoading(true);

        const response = await sendMessage(message);
        setAnswer(response.answer);
        setLoading(false);
    }

    return (
        <div className="chat-page">
            <div className="chat-title">

                <h1>
                    {t.chatTitle}
                </h1>

            </div>
            <div className="chat-box">
                <div className="message-area">
                    {
                        previousMessage &&
                        <div className="user-message">
                            {previousMessage}
                        </div>

                    }
                    {
                        loading &&
                        <div className="ai-response loading">
                            {t.thinking}
                        </div>

                    }
                    {
                        answer &&
                        <div className="ai-response">
                            <h3>
                                {t.assistant}
                            </h3>
                            <div className="medical-result">
                                <p className="result-item">
                                    <strong className="urgency">
                                        {t.urgency}:
                                    </strong>
                                    {" "}
                                    {answer.Urgency}
                                </p>
                                <p className="result-item">
                                    <strong>
                                        {t.reason}:
                                    </strong>
                                    {" "}
                                    {answer.Reason}
                                </p>
                                <p className="result-item">
                                    <strong>
                                        {t.action}:
                                    </strong>
                                    {" "}
                                    {answer.Action}
                                </p>
                            </div>
                        </div>
                    }
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-area">
                        <textarea
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            placeholder={t.chatPlaceholder}
                        />
                        <button type="submit">
                            {t.send}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;