# What it does:
# 	•	Takes student mastery as input
# 	•	Chooses next action (simplify / advance / revise)

class RuleBasedTutor:
    def __init__(self,advance=85,simplify=50):
        self.advance=advance
        self.simplify=simplify
    def get_action(self,mastery_score):
        if mastery_score >= self.advance:
            return "advance"
        elif mastery_score >= self.simplify:
            return "simplify"
        else:
            return "revise"

        

