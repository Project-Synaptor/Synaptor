import { useState } from "react";
import NeuralBackground from "../components/neuralbackground";
import { MoveRight } from 'lucide-react';
const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Cow", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Mark Twain", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "80°C", correct: false },
      { text: "70°C", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Silver", correct: false },
    ],
  },
  {
    question: "Which organ in the human body pumps blood?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: true },
      { text: "Liver", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);

  function handleAnswer(answer, index) {
    if (selected !== null) return;
    setSelected(index);
    if (answer.correct) setScore(score + 1);
  }

  function handleNext() {
    setSelected(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setSelected(null);
    setShowScore(false);
  }

  return (
    <div className="bg-[#020616] min-h-screen w-screen flex items-center justify-center text-white relative">
      <NeuralBackground />

      <div className="relative z-10 w-[500px] bg-[#1b2233] rounded-xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Simple Quiz</h1>

        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl mb-4">
              You scored {score} out of {questions.length}!
            </h2>
            <button
              onClick={restartQuiz}
              className="px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl mb-6">
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </h2>

            <div className="flex flex-col gap-3">
              {questions[currentQuestion].answers.map((answer, index) => {
                const isCorrect = answer.correct;
                const isSelected = selected === index;

                let buttonStyle =
                  "bg-[#0f172a] hover:bg-[#1e293b]";

                if (selected !== null) {
                  if (isCorrect) buttonStyle = "bg-green-600";
                  else if (isSelected) buttonStyle = "bg-red-600";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer, index)}
                    disabled={selected !== null}
                    className={`px-4 py-3 rounded-lg text-left transition ${buttonStyle}`}
                  >
                    {answer.text}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <button
                onClick={handleNext}
                className="mt-6 w-25 p-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition flex items-center justify-between"
              >
                Next <MoveRight />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
