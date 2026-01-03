import { useState, useEffect } from "react";
import NeuralBackground from "../components/neuralbackground";
import { MoveRight } from "lucide-react";

const questions = [
  {
    concept: "Geography",
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correct: "New Delhi",
    level: "easy"
  },
  {
    concept: "Geography",
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correct: "Nile",
    level: "easy"
  },
  {
    concept: "Geography",
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Australia", "Africa", "South America"],
    correct: "Africa",
    level: "easy"
  },
  {
    concept: "Geography",
    question: "Which country has the largest population in the world?",
    options: ["India", "China", "USA", "Russia"],
    correct: "India",
    level: "easy"
  },
  {
    concept: "Geography",
    question: "Which ocean is the largest on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: "Pacific Ocean",
    level: "easy"
  },
  {
    concept: "Geography",
    question: "Mount Everest lies on the border of which two countries?",
    options: ["India and China", "Nepal and China", "Nepal and India", "Bhutan and China"],
    correct: "Nepal and China",
    level: "easy"
  },
  {
    concept: "Geography",
    question: "Which is the smallest continent by land area?",
    options: ["Europe", "Antarctica", "Australia", "South America"],
    correct: "Australia",
    level: "easy"
  }
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [aiResponse, setAiResponse] = useState(null);

  useEffect(() => {
    setStartTime(Date.now());
  }, [index]);

  async function handleAnswer(option) {
    if (selected !== null) return;

    setSelected(option);

    const q = questions[index];
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const isCorrect = option === q.correct ? 1 : 0;

    const payload = {
      concept: q.concept,
      time_taken: timeTaken,
      latency: timeTaken,
      attempts: 1,
      hint_used: false,
      correct: isCorrect,
      question_level: q.level,
      failures: isCorrect ? 0 : 1,
      engagement: "high_engagement"
    };

    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    setAiResponse(data);
    localStorage.setItem("lastAIResponse", JSON.stringify(data));
  }

  function nextQuestion() {
    setSelected(null);
    setAiResponse(null);

    if (index + 1 < questions.length) {
      setIndex(i => i + 1);
    } else {
      window.location.href = "/dashboard";
    }
  }
  const q = questions[index];

  return (
    <div className="bg-[#020616] min-h-screen w-screen flex items-center justify-center text-white relative">
      <NeuralBackground />

      <div className="relative z-10 w-[500px] bg-[#1b2233] rounded-xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          AI Interactive Assessment
        </h1>

        <h2 className="text-xl mb-6">{q.question}</h2>

        <div className="flex flex-col gap-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              disabled={selected !== null}
              className="px-4 py-3 rounded-lg text-left transition bg-[#0f172a] hover:bg-[#1e293b]"
            >
              {opt}
            </button>
          ))}
        </div>

        {aiResponse && (
          <>
            <div className="mt-4 text-sm text-cyan-300">
              Mastery: {aiResponse.mastery_level} | AI says: {aiResponse.difficulty}
            </div>

            <button
              onClick={nextQuestion}
              className="mt-6 p-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition flex items-center gap-2"
            >
              Next <MoveRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
