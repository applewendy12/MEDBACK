import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div>
        <card>
          <h1 class='website-name'>
            eyeSpy
          </h1>
          <button>Start Your Eye Test Today</button>
        </card>
      </div>
    </>
  )
}

export default App
