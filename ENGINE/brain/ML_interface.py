import joblib
import numpy as np
import os

BASE_DIR = os.path.dirname(__file__)
model_path = os.path.join(BASE_DIR, "mastery_model.pkl")

model = joblib.load(model_path)

LEVEL_MAP = {
    "easy": 0,
    "medium": 1,
    "hard": 2
}

def predict_mastery(features):
    time_taken, latency, attempts, hint_used, correct, question_level = features

    if isinstance(question_level, str):
        question_level = LEVEL_MAP.get(question_level.lower(), 1)

    X = np.array([[time_taken, latency, attempts, hint_used, correct, question_level]])
    return model.predict(X)[0]

def mastery_level(score):
    if score < 40:
        return "low"
    elif score < 70:
        return "medium"
    else:
        return "high"