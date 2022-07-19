import { useState } from 'react'
import on from './icons/on.svg'
import off from './icons/off.svg'
import './App.css'
import Button from './components/button.jsx'
import Volume from './components/volume.jsx'


function App() {
  const [togle, setTogle] = useState(on)

  const setToggle = () => {
    if (togle == on) {
      setTogle(off)
    } else {
      setTogle(on)
    }
  }
  
  return (
    <div className="App">
      <h1 className="text-white text-center">
        Look at me
      </h1>
      <Volume togle={togle} />
      <Button setToggle={setToggle}/>
    </div>
  )
}

export default App
