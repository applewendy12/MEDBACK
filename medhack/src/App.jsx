import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import myimage from './assets/regularEyeExam.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div class='background-image'>
        <card>
          <h1 class='website-name'>
            eyeSpy
          </h1>
          {/* <img src={myimage} alt="eye" className="eye-exam-image" /> */}
          <p>eyeSpy that you need an eyetest!</p>
          <button>Start Your Eye Test Today</button>
        </card>
      </div>
    </>
  )
}

export default App
