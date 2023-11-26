import React from 'react'
import SinglePalette from './SinglePalette'
import { useState, useContext } from 'react'
import ColorContext from '../context/ColorContext'


const Palettes = () => {
    const [hovering, setHovering] = useState(false)
    const {generatedColors} = useContext(ColorContext)

    return (
        <>
            <div className='h-96 max-w-[400px] m-auto border bg-slate-300 relative'>
                <SinglePalette index={0} height={"37.5%"}/>
                <SinglePalette index={1} height={"25%"}/>
                <SinglePalette index={2} height={"12.5%"}/>
                <SinglePalette index={3} height={"12.5%"}/>
                <SinglePalette index={4} height={"12.5%"}/>

                {/* <div className={`text-white duration-150 absolute z-20 pl-2 ${hovering ? "opacity-100" : "opacity-0"}`}
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)}>
                        <b>{"#" + generatedColors[0]}</b></div>
                
                <div className={`w-full h-[37.5%] duration-200 relative z-10 ${hovering ? "brightness-90" : "brightness-100"}`} 
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)} 
                    style={{backgroundColor: `#${generatedColors[0]}`}}>
                </div>
                <div className={`text-white duration-150 absolute z-20 pl-2 ${hovering ? "opacity-100" : "opacity-0"}`}
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)}>
                        <b>{"#" + generatedColors[1]}</b></div>
                
                <div className={`w-full h-[25%] duration-200 relative z-10 ${hovering ? "brightness-90" : "brightness-100"}`} 
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)} 
                    style={{backgroundColor: `#${generatedColors[1]}`}}>
                </div>
                <div className={`text-white duration-150 absolute z-20 pl-2 ${hovering ? "opacity-100" : "opacity-0"}`}
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)}>
                        <b>{"#" + generatedColors[2]}</b></div>
                
                <div className={`w-full h-[12.5%] duration-200 relative z-10 ${hovering ? "brightness-90" : "brightness-100"}`} 
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)} 
                    style={{backgroundColor: `#${generatedColors[2]}`}}>
                </div>
                <div className={`text-white duration-150 absolute z-20 pl-2 ${hovering ? "opacity-100" : "opacity-0"}`}
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)}>
                        <b>{"#" + generatedColors[3]}</b></div>
                
                <div className={`w-full h-[12.5%] duration-200 relative z-10 ${hovering ? "brightness-90" : "brightness-100"}`} 
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)} 
                    style={{backgroundColor: `#${generatedColors[3]}`}}>
                </div>
                <div className={`text-white duration-150 absolute z-20 pl-2 ${hovering ? "opacity-100" : "opacity-0"}`}
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)}>
                        <b>{"#" + generatedColors[4]}</b></div>
                
                <div className={`w-full h-[12.5%] duration-200 relative z-10 ${hovering ? "brightness-90" : "brightness-100"}`} 
                    onMouseEnter={() => setHovering(true)} 
                    onMouseLeave={() => setHovering(false)} 
                    style={{backgroundColor: `#${generatedColors[4]}`}}>
                </div> */}

            </div>

        </>
    )
}

export default Palettes