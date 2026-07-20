import { useState } from "react";
import { sendMessage } from "../services/api";

import { useLanguage } from "../components/LanguageContext";
import { text } from "../translations";

import "../styles/chat.css";


function Chat() {

    const { language } = useLanguage();
    const t = text[language];


    const [messages,setMessages] = useState([
        {
            sender:"ai",
            text:t.welcomeMessage
        }
    ]);


    const [message,setMessage] = useState("");

    const [loading,setLoading] = useState(false);



    async function handleSubmit(e){

        e.preventDefault();

        if(!message.trim()) return;


        setMessages(prev=>[
            ...prev,
            {
                sender:"user",
                text:message
            }
        ]);


        setMessage("");

        setLoading(true);


        try{

            const response = await sendMessage(message);


            setMessages(prev=>[
                ...prev,
                {
                    sender:"ai",
                    text:response.answer
                }
            ]);

        }

        catch(error){

            console.log(error);

        }


        setLoading(false);

    }



    return (

        <div className="chat-page">

            <div className="chat-card">


                <div className="chat-header">

                    <img
                        className="bot-image"
                        src="https://cdn-icons-png.flaticon.com/512/387/387569.png"
                    />


                    <div className="bot-status">

                        <h3>
                            AMAL AI
                        </h3>

                        <p>
                            {t.chatSubtitle}
                        </p>

                    </div>


                </div>



                <div className="messages">


                    {
                        messages.map((msg,index)=>(

                            <div
                                key={index}
                                className={`message ${msg.sender}`}
                            >


                                {
                                    msg.sender==="ai" &&
                                    <img
                                        className="avatar"
                                        src="https://cdn-icons-png.flaticon.com/512/387/387569.png"
                                    />
                                }


                                <div className="bubble">


                                    {
                                        typeof msg.text==="object"
                                        ?

                                        <>
                                            <p>
                                                <b>{t.urgency}:</b> {msg.text.Urgency}
                                            </p>

                                            <p>
                                                <b>{t.reason}:</b> {msg.text.Reason}
                                            </p>

                                            <p>
                                                <b>{t.action}:</b> {msg.text.Action}
                                            </p>
                                        </>

                                        :

                                        <p>
                                            {msg.text}
                                        </p>
                                    }


                                </div>


                            </div>

                        ))
                    }


                    {
                        loading &&
                        <div className="message ai">
                            <div className="bubble">
                                {t.thinking}
                            </div>
                        </div>
                    }


                </div>



                <form
                    className="input-area"
                    onSubmit={handleSubmit}
                >

                    <textarea
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        placeholder={t.chatPlaceholder}
                    />


                    <button>
                        ➤
                    </button>


                </form>



            </div>

        </div>

    );

}

export default Chat;