import React, { useEffect, useState } from 'react'
import { isNumeric } from '../Helpers'
import Pixel from '../Pixel'
import './index.css'

type CanvasProps = {
    dimensions: number
    resolution: number
    hoverColor: string
    colorMap?: Record<string, string>
    balance?: number
    callback?: () => void
}

const Canvas: React.FC<CanvasProps> = (props) => {
    
    const { dimensions, hoverColor, resolution, colorMap, balance, callback } = props;

    const [selectedColorMap, setMap] = useState<Record<string, string>>({})

    useEffect(() => {
        if (colorMap) {
            setMap(colorMap)
        }
    }, [colorMap])
    
    const updateColor = (id: string, selectedColor: string) => {
        if (isNumeric(balance) && balance && balance > 0) {
            const updatedMap = {...selectedColorMap, [id]: selectedColor}
            setMap(updatedMap)

            if (callback) {
                callback()
            }
        }
    }

    const createCanvas = (): JSX.Element[] => {
        const pixels: JSX.Element[] = [];
        if (resolution > 0) {
            for (let i = 0; i < Math.pow(resolution, 2); i++ ) {
                pixels.push(<Pixel id={`${i}`} dimensions={(dimensions/resolution) - 2} key={`Pixel-${i}`} hoverColor={hoverColor} selectedColor={selectedColorMap[`${i}`]} callback={updateColor}/>)
            }
        }
        return pixels;
    }
 
    return (
        <div className="Canvas" style={{height: dimensions, width: dimensions}}>
            {createCanvas()}
        </div>
    )
}

export default Canvas