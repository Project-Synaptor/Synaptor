from brain.MultiSignalLogic3 import DifficultyAdjuster
from brain.ExplanationStyleSelector4 import ExplanationSelector
from brain.MultiStepPlanningAgent6 import LessonPlanner
from brain.ML_interface import predict_mastery, mastery_level
from brain.LLM_interface import generate_explanation


class Synaptor:
    def __init__(self):
        print("🤖 Booting up Synaptor...")
        self.planner = LessonPlanner()
        self.adjuster = DifficultyAdjuster()
        self.selector = ExplanationSelector()
        print("✅ Systems Online.\n")

    def process_interaction(
        self,
        concept,
        time_taken,
        latency,
        attempts,
        hint_used,
        correct,
        question_level,
        failures,
        engagement
    ):
        # ---------- ENGAGEMENT CHECK ----------
        if engagement == "low_engagement":
          return {
        "status": "low focus",
        "action": "simplify and reengage"
    }
        # ---------- ML UNDERSTANDING ----------
        mastery_score = predict_mastery([
            time_taken,
            latency,
            attempts,
            hint_used,
            correct,
            question_level
        ])
        mastery = mastery_level(mastery_score)
        # ---------- PLANNING ----------
        success = (failures == 0)
        next_step = self.planner.update_plan(success)

        # ---------- DIFFICULTY DECISION (ML + RULE) ----------
        if mastery == "low":
            diff_decision = "decrease difficulty"
        elif mastery == "high":
            diff_decision = "increase difficulty"
        else:
            diff_decision = self.adjuster.evaluate(time_taken, failures)

        # ---------- EXPLANATION STYLE ----------
        style = self.selector.get_style(failures)

        agent_decision = {
            "status": "normal",
            "concept": concept,
            "mastery_score": float(round(mastery_score, 2)),
            "mastery_level": mastery,
            "next_step": next_step,
            "difficulty": diff_decision,
            "teaching_style": style
        }

        explanation = generate_explanation(agent_decision, concept)

        return {
            **agent_decision,
            "explanation": explanation
        }

# <==============DEMO PRESETS==================>

DEMO_PRESETS = {
    "1": {
        "name": "Struggling Student",
        "concept": "Dynamic Programming",
        "time_taken": 180,
        "latency": 90,
        "attempts": 3,
        "hint_used": 1,
        "correct": 0,
        "question_level": "medium",
        "failures": 3,
        "engagement": "high_engagement"
    },
    "2": {
        "name": "Average Student",
        "concept": "Binary Search",
        "time_taken": 80,
        "latency": 30,
        "attempts": 1,
        "hint_used": 0,
        "correct": 1,
        "question_level": "easy",
        "failures": 1,
        "engagement": "high_engagement"
    },
    "3": {
        "name": "Fast Learner",
        "concept": "Weighted Interval Scheduling",
        "time_taken": 30,
        "latency": 15,
        "attempts": 0,
        "hint_used": 0,
        "correct": 1,
        "question_level": "hard",
        "failures": 0,
        "engagement": "high_engagement"
    }
}
# =================== MAIN ===================
if __name__ == "__main__":
    bot = Synaptor()

    print("\nChoose Demo Scenario:")
    print("1 → Struggling Student")
    print("2 → Average Student")
    print("3 → Fast Learner")

    choice = input("Enter choice (1/2/3): ").strip()

    if choice not in DEMO_PRESETS:
        print("❌ Invalid choice")
        exit()

    data = DEMO_PRESETS[choice]

    print(f"\n🎯 Running Demo: {data['name']}")

    result = bot.process_interaction(
        data["concept"],
        data["time_taken"],
        data["latency"],
        data["attempts"],
        data["hint_used"],
        data["correct"],
        data["question_level"],
        data["failures"],
        data["engagement"]
    )

    print("\n🤖 SYNAPTOR RESPONSE:\n", result)