import { useState, useEffect } from "react";
import { sendMessage } from "../services/api";
import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";
import botLogo from "../assets/Logo-2-2.png";
import "../styles/chat.css";

function renderUrgency(rawUrgency, t) { // Helper function to render urgency levels in the UI
    if (!rawUrgency) return "";
    const val = String(rawUrgency).trim().toUpperCase();
    if (val.includes("LOW")) return t.urgencyLow;
    if (val.includes("MEDIUM")) return t.urgencyMedium;
    if (val.includes("HIGH")) return t.urgencyHigh;
    return rawUrgency;
}

function Chat() { // Main Chat component
    const { language } = useLanguage();
    const t = text[language];

    // Messages displayed in UI
    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: t.welcomeMessage,
        },
    ]);

    // History array tracked for API context
    const [apiHistory, setApiHistory] = useState([]);  // Tracks the conversation history for API context
    const [message, setMessage] = useState(""); // Current user input message
    const [loading, setLoading] = useState(false); // Indicates if the AI is processing a response

    useEffect(() => { // Update welcome message when language changes
        setMessages((prev) => [
            {
                sender: "ai",
                text: t.welcomeMessage,
            },
            ...prev.slice(1),
        ]);
    }, [language]);

    async function handleSubmit(e) { 
        e.preventDefault(); 

        if (!message.trim() || loading) return; 

        const userQuestion = message;
        setMessage("");

        // Render user message in UI
        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: userQuestion,
            },
        ]);

        // Add question to history array
        const updatedHistory = [
            ...apiHistory,
            {
                role: "user",
                content: userQuestion,
            },
        ];

        setLoading(true);

        try {
            // Send formatted history to backend
            const response = await sendMessage(updatedHistory);
            let aiAnswer = response.answer;

            // Parse response if returned as a stringified JSON object
            if (typeof aiAnswer === "string") {
                try {
                    aiAnswer = JSON.parse(aiAnswer);
                } catch {
                    // Leave as string if standard text
                }
            }

            // Update UI with AI response
            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: aiAnswer,
                },
            ]);

            // Append AI response to history array for subsequent turns
            setApiHistory([
                ...updatedHistory,
                {
                    role: "assistant",
                    content:
                        typeof aiAnswer === "object"
                            ? JSON.stringify(aiAnswer)
                            : String(aiAnswer),
                },
            ]);
        } catch (error) {
            console.error("Chat Error:", error);
        }

        setLoading(false);
    }

    return (
        <div className="chat-page">
            <div className="chat-card">
                <div className="chat-header">
                    <img
                        className="bot-image"
                        src={botLogo}
                        alt="AMAL AI"
                    />

                    <div className="bot-status">
                        <h3>AMAL AI</h3>
                        <p>{t.chatSubtitle}</p>
                    </div>
                </div>

                <div className="messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.sender}`}
                        >
                            {msg.sender === "ai" && (
                                <img
                                    className="avatar"
                                    src={botLogo}
                                    alt="bot"
                                />
                            )}

                            <div className="bubble">
                                {typeof msg.text === "object" && msg.text !== null ? (
                                    <>
                                        <p>
                                            <b>{t.urgency}:</b>{" "}
                                            {renderUrgency(msg.text.urgency || msg.text.Urgency, t)}
                                        </p>
                                        <p>
                                            <b>{t.reason}:</b>{" "}
                                            {msg.text.reason || msg.text.Reason}
                                        </p>
                                        <p>
                                            <b>{t.action}:</b>{" "}
                                            {msg.text.action || msg.text.Action}
                                        </p>
                                    </>
                                ) : (
                                    <p>{msg.text}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="message ai">
                            <div className="bubble">{t.thinking}</div>
                        </div>
                    )}
                </div>

                <form
                    className="input-area"
                    onSubmit={handleSubmit}
                >
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.chatPlaceholder}
                    />

                    <button type="submit">➤</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;