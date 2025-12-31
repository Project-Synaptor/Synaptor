from brain.SynaptorCore7 import Synaptor

# Create ONE shared brain instance
synaptor_brain = Synaptor()

def run_synaptor(payload: dict):
    """
    payload comes from backend API
    """

    return synaptor_brain.process_interaction(
        payload["concept"],
        payload["time_taken"],
        payload["latency"],
        payload["attempts"],
        payload["hint_used"],
        payload["correct"],
        payload["question_level"],
        payload["failures"],
        payload["engagement"]
    )