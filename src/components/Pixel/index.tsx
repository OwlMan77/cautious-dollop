import React, { useCallback, useEffect, useState } from 'react'
import './index.css'

type PixelProps = {
    id: string
    selectedColor?: string // RBG STRING
    hoverColor: string
    dimensions: number,
    callback?: (id: string, color: string) => void
}
const Pixel: React.FC<PixelProps> = (props) => {
    const { id, selectedColor, hoverColor, dimensions, callback } = props;
    const [ backgroundColor, setBackground] = useState('rgba(0, 0, 0, 0)')

    useEffect(() => {
        if (selectedColor){
            setBackground(selectedColor)
        }
    }, [selectedColor])

    const handleMouseEnter= () => {
        if(!selectedColor) {
            setBackground(`${hoverColor}`)
        }
    }

    const handleMouseLeave = () => {
        if(!selectedColor) {
            setBackground('rgba(0, 0, 0, 0)')
        }
    }

    const onClickHandler = () => {
        if(!selectedColor) {
            const newSelectedColor = hoverColor.replace('0.25', '1')
        
            if (callback) {
                callback(id, newSelectedColor)
            }

        }
    }
  return (
    <div className="Pixel" onClick={onClickHandler} style={{backgroundColor , height: dimensions, width: dimensions }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    </div>
  )
}

export default Pixel