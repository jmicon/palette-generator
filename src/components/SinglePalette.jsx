import { useState, useContext } from 'react'
import ColorContext from '../context/ColorContext'

const SinglePalette = ({index, height}) => {
    const [hovering, setHovering] = useState(false)
    const {generatedColors} = useContext(ColorContext)

  return (
    <>
        <div className={`text-white duration-150 z-20 absolute pl-2 ${hovering ? "opacity-100" : "opacity-0"}`}
            onMouseEnter={() => setHovering(true)} 
            onMouseLeave={() => setHovering(false)}>
                <b>{"#" + generatedColors[index]}</b></div>
        
        <div className={`w-full h-[${height}] duration-200 relative z-10 ${hovering ? "brightness-90" : "brightness-100"}`} 
            onMouseEnter={() => setHovering(true)} 
            onMouseLeave={() => setHovering(false)} 
            style={{backgroundColor: `#${generatedColors[index]}`}}>
        </div>
    </>
  )
}

export default SinglePalette