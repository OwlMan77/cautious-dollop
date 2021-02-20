import React, { useEffect, useState } from 'react'
import './index.css'

type PixelTokenBankProps = {
    balance: number
}

const PixelTokenBank: React.FC<PixelTokenBankProps> = (props) => {
    const { balance } = props

    const [ pixelTokens, setPixelTokens ] = useState(0)


    useEffect(() => {
        if (balance) {
            setPixelTokens(pixelTokens)
        }
    }, [balance])

  return (
    <div className="PixelTokenBank">
       Pixels left: {balance}
    </div>
  )
}

export default PixelTokenBank