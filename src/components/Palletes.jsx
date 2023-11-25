import React, {useContext} from 'react'
import ColorContext from '../context/ColorContext'
import { useState } from 'react'

const Palletes = () => {
    const [hovering, setHovering] = useState(false)

    const {generatedColors} = useContext(ColorContext)

    return (
        <>
            <div className='h-96 max-w-[400px] border m-auto'>
                <div className='w-full h-[37.5%] flex justify-center content-center items-end' onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} style={{backgroundColor: `#${generatedColors[0]}`}}>
                    {hovering && <div>{"#" + generatedColors[0]}</div> }
                </div>
                <div className='w-full h-[25%]' style={{backgroundColor: `#${generatedColors[1]}`}}></div>
                <div className='w-full h-[12.5%]' style={{backgroundColor: `#${generatedColors[2]}`}}></div>
                <div className='w-full h-[12.5%]' style={{backgroundColor: `#${generatedColors[3]}`}}></div>
                <div className='w-full h-[12.5%]' style={{backgroundColor: `#${generatedColors[4]}`}}></div>
            </div>

        </>
    )
}

export default Palletes