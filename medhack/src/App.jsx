import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Popup from 'reactjs-popup';
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
          <Popup trigger=
                {<button> Start your Eye Test today! </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                              
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </card>
      </div>
    </>
  )
}

export default App
