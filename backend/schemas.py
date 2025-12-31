"""
Import required SQLAlchemy column types
-Frontend → Backend
- Backend → AI
- Backend → Frontend
"""

from pydantic import BaseModel
#=========STUDENT ANSWER REQUEST===========
#This schema defines the data that frontend sends
# when a student submits an answer
class StudentAnswer(BaseModel):
    student_id: int
    time_taken: float
    attempt_count: int
    hint_used: bool
    is_correct: bool
    question_difficulty: str

#================= STUDENT RESPONSE OUTPUT =================
# This schema defines the response sent back to frontend
# after AI analysis is completed
class StudentResponse(BaseModel):
    message: str
    new_level: str
    score: float
