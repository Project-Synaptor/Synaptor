import React from "react";
import NeuralBackground from "../components/neuralbackground";
import NavBarDashBroard from "../components/NavBarDashBroard";

const Dashboard = () => {
  const raw = localStorage.getItem("lastAIResponse");

  if (!raw) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <p>No AI analysis available yet. Please complete an interaction first.</p>
      </div>
    );
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <p>Corrupted AI data. Please retry the interaction.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] overflow-hidden p-2.5 text-white relative">
      <NeuralBackground />
      <NavBarDashBroard />

      <div className="relative z-10 max-w-4xl mx-auto mt-10 bg-[#1b2233] p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          Synaptor AI Teaching Decision
        </h2>

        <p><b>Concept:</b> {data.concept}</p>
        <p><b>Mastery Score:</b> {data.mastery_score}</p>
        <p><b>Mastery Level:</b> {data.mastery_level}</p>
        <p><b>Next Learning Step:</b> {data.next_step}</p>
        <p><b>Difficulty Action:</b> {data.difficulty}</p>
        <p><b>Teaching Style:</b> {data.teaching_style}</p>

        <div className="mt-4 text-cyan-300">
          {data.explanation}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
