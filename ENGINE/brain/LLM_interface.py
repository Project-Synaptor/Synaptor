from cerebras.cloud.sdk import Cerebras
import os

client = Cerebras(
    api_key=os.getenv("CEREBRAS_API_KEY")
)

def generate_explanation(agent_decision, concept="variables"):
    style = agent_decision["teaching_style"]
    difficulty = agent_decision["difficulty"]

    prompt = f"""
You are a friendly tutor.

Teach the concept of {concept}.
Teaching style: {style}
Difficulty level: {difficulty}

Explain clearly and simply.
Do NOT change teaching strategy.
"""

    response = client.chat.completions.create(
        model="llama3.1-8b",
        messages=[
            {"role": "system", "content": "You are an educational tutor."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.4,
        max_tokens=200
    )

    return response.choices[0].message.content