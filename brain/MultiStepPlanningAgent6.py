class LessonPlanner:
    def __init__(self):
        # Define the syllabus
        self.syllabus = {
            "variables": ["concept", "example", "practice", "quiz"]
        }
        self.plan = []

    def start_topic(self, topic):
        self.plan = self.syllabus[topic].copy()
        return self.plan[0]

    def update_plan(self, success):
        if success:
            # If successful, remove the finished step
            if len(self.plan) > 0:
                self.plan.pop(0)
        else:
            # If failed, add "review" to the front
            self.plan.insert(0, "review")
        
        # Now check what is next
        if len(self.plan) == 0:
            return "Lesson Complete"
        else:
            return self.plan[0]