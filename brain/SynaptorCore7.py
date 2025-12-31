import time
from MultiSignalLogic3 import DifficultyAdjuster
from ExplanationStyleSelector4 import ExplanationSelector
from EngagementAware5 import EngagementMonitor
from MultiStepPlanningAgent6 import LessonPlanner
from LLM_interface import generate_explanation

class Synaptor:
    def __init__(self):
        print("🤖 Booting up Synaptor...")
        # Initialize all the subsystems
        self.planner = LessonPlanner()
        self.adjuster = DifficultyAdjuster()
        self.selector = ExplanationSelector()
        self.monitor = EngagementMonitor()
        print("✅ Systems Online.\n")

    def process_interaction(self, student_response,concept,latency,time_taken, success, failures,engagement):
        """
        The Core Brain Loop:
        1. Check if user is awake (Engagement)
        2. Decide the next topic (Planner)
        3. Decide the speed (Adjuster)
        4. Decide the voice (Selector)
        """
        
        # 1. Check Engagement 
        # We check this first. If they aren't engaged, nothing else matters.
        # engagement = self.monitor.check_status(student_response, latency)
        if engagement == "low_engagement":
             return {
                 "status": "low focus",
                 "action": "simplify and reengage", 
                 "reason": "User seems bored , confuse or unresponsive."
             }

        # 2. Update the Plan 
        next_step = self.planner.update_plan(success)

        # 3. Adjust Difficulty (The "Operations" Department)
        # Based on how long they took.
        diff_decision = self.adjuster.evaluate(time_taken, failures)

        # 4. Pick Explanation Style 
        # Based on how many times they have failed.
        style = self.selector.get_style(failures)

        # 5. Return the Master Plan
        agent_decision= {
            "status": "normal",
            "next_step": next_step,
            "difficulty": diff_decision,
            "teaching_style": style
        }
        explanation = generate_explanation(agent_decision,concept)

        return {
          **agent_decision,
          "explanation": explanation
}

# <=== MAIN SIMULATION ===>
if __name__ == "__main__":
    bot = Synaptor()
# <============ USER'S INPUT ================>
    c=input("ENTER CONCEPT : ")
    l=int(input("ENTER LATENCY"))
    tk=int(input("ENTER TIME TAKEN : "))
    s=input("ENTER 'SUCCESS' OR 'FAILURE' : ")
    f=int(input("ENTER NO. OF FAILURE : "))
    e=input("ENTER ENGAGEMENT(low_engagement / high_engagement) : ")
    sr=input("ENTER STUDENT RESPONSE : ")
    result = bot.process_interaction(sr,c,l,tk,s,f,e)
    print(result)

    
