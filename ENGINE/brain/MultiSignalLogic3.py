# ADVANCED PACING SYSTEM

class DifficultyAdjuster:
    def __init__(self,genius_time=60,struggle_time=200,max_attempts=3):
        self.genius_time=genius_time
        self.struggle_time=struggle_time
        self.max_attempts=max_attempts
    def evaluate(self,time_taken,attempts):
        if time_taken<self.genius_time and attempts==1:
            return "increase difficulty"
        elif time_taken>self.struggle_time or attempts>self.max_attempts:
            return "decrease difficulty"
        else:
            return "maintain difficulty"
