import React, { useEffect, useState } from 'react'
import './index.css'

type PixelProps = {
    selectedColor?: string // RBG STRING
    hoverColor: string
    dimensions: number
}
const Pixel: React.FC<PixelProps> = (props) => {
    const { selectedColor, hoverColor, dimensions } = props;
    const [ backgroundColor, setBackground] = useState('0, 0, 0, 0')


    useEffect(() => {
        if (selectedColor){
            setBackground(selectedColor)
        }
    }, [selectedColor])


    const handleMouseEnter= () => {
        if(!selectedColor && hoverColor) {
            setBackground(`${hoverColor}`)
        }
    }

    const handleMouseLeave= () => {
        if(!selectedColor) {
            setBackground('0, 0, 0, 0')
        }
    }
  return (
    <div className="Pixel" style={{backgroundColor: `rgba(${backgroundColor})`, height: dimensions, width: dimensions }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    </div>
  )
}

export default Pixel