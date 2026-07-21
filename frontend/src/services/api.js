const API_URL = "http://localhost:8000";

export async function sendMessage(conversationHistory) {
    const response = await fetch(`${API_URL}/chat`, { // Send the formatted message to the backend
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({
            messages: conversationHistory, // Passes a string, so FastAPI validation passes 
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`); 
    }

    const data = await response.json(); 
    return data;
}