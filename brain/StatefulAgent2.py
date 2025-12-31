from RuleBasedTutorAgent1 import RuleBasedTutor

class StatefulTutor(RuleBasedTutor):
    def __init__(self,history):
        super().__init__()
        self.history=history

# <========================This is where the agent will remember its last 3 actions=======================>

    def log_action(self,action):
        self.history.append(action)
        if len(self.history) > 3:
            self.history.pop(0)

# if the agent tries to "revise" 4 times in a row, it catches itself and calls for human help.
    def get_action(self,mastery_score):
        proposed_action=super().get_action(mastery_score)
        if len(self.history) == 3 and self.history.count(proposed_action) == 3:
            return "contact_human"
        
# State Management: By adding self.log_action(proposed_action) at the end, the agent "learns" from every interaction.
        self.log_action(proposed_action)
        return proposed_action
        
        