from pydantic import BaseModel

# Chatbox answer consists of 3 components
class AmalAnswer(BaseModel):
    Urgency: str
    Reason: str
    Action: str

# Chatbox prompt stores user question
class AmalChatRequest(BaseModel):
    message: str

# Chatbox response returns answer class
class AmalChatResponse(BaseModel):
    answer: AmalAnswer