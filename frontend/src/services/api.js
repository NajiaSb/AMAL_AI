const API_URL = "http://localhost:8000";

export async function sendMessage(conversationHistory) {
    // Format the conversation history array into a readable transcript string
    const formattedMessage = conversationHistory 
        .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`) // Map each message to a string with role and content
        .join("\n"); // Convert array to string for backend processing

    const response = await fetch(`${API_URL}/chat`, { // Send the formatted message to the backend
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({
            message: formattedMessage, // Passes a string, so FastAPI validation passes 
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`); 
    }

    const data = await response.json(); 
    return data;
}