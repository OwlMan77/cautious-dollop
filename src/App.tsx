import React, { useState } from 'react'
import Canvas from './components/Canvas'
import ColorPicker from './components/ColorPicker'
import PixelTokenBank from './components/PixelTokenBank'
import './App.css'

function App() {
  const [selectedColor, selectColor] = useState('rgba(0, 0, 0, 0.25)')
  const [balance, setBalance] = useState(20)

  const reduceBalance = () => {
    if (balance > 0) {
      setBalance(balance - 1)
    }
  }

  return (
    <div className="App">
      <Canvas dimensions={500} resolution={10} hoverColor={selectedColor} balance={balance} callback={reduceBalance} />
      <div className="ActionBar">
        <ColorPicker callback={selectColor}></ColorPicker>
        <PixelTokenBank balance={balance}/>
      </div>
    </div>
  )
}

export default App
