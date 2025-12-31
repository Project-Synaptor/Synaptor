import React from 'react'
import NavBarDashBroard from '../components/NavBarDashBroard'
import NeuralBackground from '../components/neuralbackground'
import Scoredashboard from '../components/scoredashboard'
import ChartDasboard from '../components/ChartDasboard'
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#020617] to-[#020617] overflow-hidden p-2.5">
      <NeuralBackground />
      <NavBarDashBroard />
      <Scoredashboard />
      <ChartDasboard />
    </div>
  )
}

export default Dashboard
