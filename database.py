"""
1. Loading database configuration from the .env file
2. Creating a connection to the PostgreSQL database
3. Setting up SQLAlchemy session and base class for models
"""
#Import OS module to access environment variables
import os
#Import function to load variables from .env file
from dotenv import load_dotenv
#Import SQLAlchemy engine creator
from sqlalchemy import create_engine
# Import session maker and base class for ORM models
from sqlalchemy.orm import sessionmaker, declarative_base

# Load environment variables from .env file
load_dotenv()

# Read DATABASE_URL from environment variables
DATABASE_URL = os.getenv("DATABASE_URL")

# If DATABASE_URL is not found, raise an error
if DATABASE_URL is None:
    raise ValueError("DATABASE_URL is not set. Check your .env file.")

#Engine is responsible for managing database connections
engine = create_engine(DATABASE_URL)

# will be used to interact with the database
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base Class for Database Models
Base = declarative_base()
