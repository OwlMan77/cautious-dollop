import React from 'react'
import { hexToRgba } from '../Helpers'
import './index.css'

type ColorPickerProps = {
    selectedColor?: string // RBG STRING
    callback?: (value: string) => void
}
const ColorPicker: React.FC<ColorPickerProps> = (props) => {
    const { callback } = props

    const handleInput = (event: any) => {
        if (callback) {
            const targetValue = hexToRgba(event.target.value, '0.25')
            callback(targetValue)
        }
    }

  return (
      <div className="ColorPicker">
          <span>Color</span>
          <input type="color" onInput={handleInput}/>
      </div>
  )
}

export default ColorPicker