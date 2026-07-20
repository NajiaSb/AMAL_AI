import { useState } from "react";
import { sendMessage } from "../services/api";

function Chat() {
    const [message, setMessage] = useState("");
    const [answer, setAnswer] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!message.trim()) {
            return;
        }
        setLoading(true);
        const response = await sendMessage(message);
        setAnswer(response.answer);
        setLoading(false);
    }
    return (
        <div>
            <h1>
                AMAL AI Medical Assistant
            </h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    placeholder="Describe your symptoms..."
                />
                <button type="submit">
                    Send
                </button>
            </form>
            {
                loading &&
                <p>
                    Thinking...
                </p>
            }
            {
                answer &&
                <div>

                    <h2>
                        Assistant:
                    </h2>


                    <p>
                        <strong>
                            Urgency:
                        </strong>

                        {answer.Urgency}
                    </p>


                    <p>
                        <strong>
                            Reason:
                        </strong>

                        {answer.Reason}
                    </p>


                    <p>
                        <strong>
                            Action:
                        </strong>

                        {answer.Action}
                    </p>


                </div>
            }

        </div>
    );
}

export default Chat;