"""
This file defines all database tables using SQLAlchemy ORM.
It stores student data,learning analytics, and AI generated outputs.
"""
# Import required SQLAlchemy column types
from sqlalchemy import Column, Integer, String, Float, Boolean
#Import Base class to create database models
from database import Base
#=======STUDENT TABLE=============
#This class represents the "students" table in PostgreSQL

class Student(Base):
    __tablename__ = "students"
#==========BASIC STUDENT INFO=====================
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)

    # ===== AI OUTPUT =====
    #learning level and performance_score decided by AI
    learning_level = Column(String, default="easy")
    performance_score = Column(Float, default=0.0)

    # ===== QUESTION ANALYTICS =====
    time_taken = Column(Float,nullable=True)          
    attempt_count = Column(Integer,nullable=True)     
    hint_used = Column(Boolean,nullable=True)         
    is_correct = Column(Boolean,nullable=True)    

    # Difficulty decided by AI
    question_difficulty = Column(String)
