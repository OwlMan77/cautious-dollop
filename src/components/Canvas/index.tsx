import React from 'react'
import Pixel from '../Pixel'
import './index.css'

type CanvasProps = {
    dimensions: number
    resolution: number
    hoverColor: string
    selectedColorMap: Record<number, string>
}

const Canvas: React.FC<CanvasProps> = (props) => {
    
    const { dimensions, hoverColor, resolution, selectedColorMap } = props;

    const createCanvas = (): JSX.Element[] => {
        const pixels: JSX.Element[] = [];
        if (resolution > 0) {
            for (let i = 0; i < Math.pow(resolution, 2); i++ ) {
                pixels.push(<Pixel dimensions={(dimensions/resolution) - 2} key={`Pixel-${i}`} hoverColor={hoverColor} selectedColor={selectedColorMap[i]}/>)
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