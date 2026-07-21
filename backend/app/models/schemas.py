from pydantic import BaseModel

# Chatbox answer consists of 3 components
class AmalAnswer(BaseModel):
    urgency: str
    reason: str
    action: str

# Chatbox input consists of two components
class AmalQuestion(BaseModel):
    role: str # always user
    content: str # inputted question
    
# Chatbox prompt stores user question
class AmalChatRequest(BaseModel):
    messages: list[AmalQuestion]
    
# Chatbox response returns answer class
class AmalChatResponse(BaseModel):
    answer: AmalAnswer