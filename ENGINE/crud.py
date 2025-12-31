"""
This file contains all database-related operations (CRUD):
Create, Read, Update operations for Student data.
"""
#Import SQLAlchemy Session for database transactions
from sqlalchemy.orm import Session
#Import Student model from models.py
from models import Student
#-----------------------------------------------------
#Create a new student record in the database
#-----------------------------------------------------
def create_student(db: Session, name: str):
    student = Student(name=name)
    db.add(student)
    #Commit  to save data
    db.commit()
    db.refresh(student)
    return student
#------------------------------------------------------
#Fetch a student record by student ID
#------------------------------------------------------
def get_student(db: Session, student_id: int):
    return db.query(Student).filter(Student.id == student_id).first()
#------------------------------------------------------
#Update student performance and learning data
#------------------------------------------------------

def update_student_data(
    db: Session,
    student_id: int,
    ai_level: str,
    ai_score: float,
    data
):
    student = get_student(db, student_id)

    student.learning_level = ai_level
    student.performance_score = ai_score

    student.time_taken = data.time_taken
    student.attempt_count = data.attempt_count
    student.hint_used = data.hint_used
    student.is_correct = data.is_correct
    student.question_difficulty = data.question_difficulty
#Commit changes to the database 
    db.commit()
    return student
