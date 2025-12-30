import time
from MultiSignalLogic3 import DifficultyAdjuster
from ExplanationStyleSelector4 import ExplanationSelector
from EngagementAware5 import EngagementMonitor
from MultiStepPlanningAgent6 import LessonPlanner

class Synaptor:
    def __init__(self):
        print("🤖 Booting up Synaptor...")
        # Initialize all the subsystems
        self.planner = LessonPlanner()
        self.adjuster = DifficultyAdjuster()
        self.selector = ExplanationSelector()
        self.monitor = EngagementMonitor()
        print("✅ Systems Online.\n")

    def process_interaction(self, student_response, time_taken, success, failures):
        """
        The Core Brain Loop:
        1. Check if user is awake (Engagement)
        2. Decide the next topic (Planner)
        3. Decide the speed (Adjuster)
        4. Decide the voice (Selector)
        """
        
        # 1. Check Engagement 
        # We check this first. If they aren't engaged, nothing else matters.
        engagement = self.monitor.check_status(student_response, time_taken)
        if engagement == "low_engagement":
             return {
                 "status": "alert",
                 "action": "simplify and reengage", 
                 "reason": "User seems bored or unresponsive."
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
        return {
            "status": "normal",
            "next_step": next_step,
            "difficulty": diff_decision,
            "teaching_style": style
        }

# <=== MAIN SIMULATION ===>
if __name__ == "__main__":
    bot = Synaptor()
    
    print(f"📘 Starting Lesson: {bot.planner.start_topic('variables')}")
    print("=" * 50)

    # --- Scenario 1: The Struggle ---
    # User is slow (150s) and fails.
    print("\n📢 Interaction 1: User fails and is slow.")
    result1 = bot.process_interaction(
        student_response="I don't get it...", 
        time_taken=150, 
        success=False, 
        failures=1
    )
    print(f"🤖 AI Output: {result1}")

    # --- Scenario 2: The Boredom ---
    # User responds with one letter "k".
    print("\n📢 Interaction 2: User says 'k'.")
    result2 = bot.process_interaction(
        student_response="k", 
        time_taken=5, 
        success=True, 
        failures=0
    )
    print(f"🤖 AI Output: {result2}")

    # --- Scenario 3: The Success ---
    # User succeeds and is fast.
    print("\n📢 Interaction 3: User succeeds.")
    result3 = bot.process_interaction(
        student_response="The variable stores the value 10.", 
        time_taken=30, 
        success=True, 
        failures=0
    )
    print(f"🤖 AI Output: {result3}")