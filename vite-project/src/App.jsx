import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [change, setChange] = useState(true);
  const [name, setName] = useState("");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <h3>Enter your name: &nbsp;
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
        </h3>
        <button onClick={() => setChange(name=="")}> Submit </button>
        <div>
            {change ? <h1>Hello!</h1> : <h1>Welcome {name}!</h1>}
        </div>
      </div>
    </>
  )
}

export default App
